import { projectsActions, uiActions } from "@store";
import { httpRequest } from "@utils";
import { URL_CONFIG } from "@config";

const projectsURL = `${process.env.REACT_APP_BACKEND_URL}/${URL_CONFIG.projects.crudURL}`;

export const fetchProjectsData = () => {
  const updateState = (projectData, dispatch) => {
    const projects = projectData.data.projects;
    dispatch(projectsActions.fillData(projects));
  };

  return async (dispatch) => {
    const { data: projectsData, errorExists } = await httpRequest(
      projectsURL,
      "GET"
    );

    if (!errorExists) {
      updateState(projectsData, dispatch);
    } else {
      const { data: projectsData } = await httpRequest(
        `../content/projects.json`,
        "GET"
      );
      updateState(projectsData.projects, dispatch);
    }
  };
};

export function addProject(projectData, existingProjectId) {
  if (existingProjectId) {
    projectData = { ...projectData, id: existingProjectId };
  }
  return async (dispatch) => {
    const accessToken = localStorage.getItem("token");

    const {
      data: newProjectData,
      errorExists,
      errorDetails,
    } = await httpRequest(
      existingProjectId ? `${projectsURL}/${existingProjectId}` : projectsURL,
      existingProjectId ? "PATCH" : "POST",
      JSON.stringify(projectData),
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    );

    if (!errorExists) {
      const data = newProjectData.data.project;

      existingProjectId
        ? dispatch(projectsActions.updateProject(data))
        : dispatch(projectsActions.addProject(data));
    } else {
      dispatch(
        uiActions.showMessage({
          message: errorDetails.message,
          status: "error",
        })
      );
    }
  };
}

export function deleteProject(projectId) {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("token");

    const { errorExists, errorDetails } = await httpRequest(
      `${projectsURL}/${projectId}`,
      "DELETE",
      null,
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );

    if (!errorExists) {
      dispatch(projectsActions.deleteProject(projectId));
    } else {
      dispatch(
        uiActions.showMessage({
          message: errorDetails.message,
          status: "error",
        })
      );
    }
  };
}
