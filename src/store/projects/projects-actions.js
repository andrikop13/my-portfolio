import { projectsActions, uiActions } from "@store";
import { httpRequest } from "@utils";

export const fetchProjectsData = () => {
  const projects = [];
  const updateState = (projectData, projects, dispatch) => {
    Object.entries(projectData).forEach(([key, value]) => {
      value["id"] = key;
      projects.push(value);
    });
    dispatch(projectsActions.fillData(projects));
  };

  return async (dispatch) => {
    const { data: projectData, errorExists } = await httpRequest(
      `${process.env.REACT_APP_FIREBASE_URL}/projects.json`,
      "GET"
    );

    if (!errorExists) {
      updateState(projectData, projects, dispatch);
    } else {
      const { data: projectData } = await httpRequest(
        `../content/projects.json`,
        "GET"
      );
      updateState(projectData.projects, projects, dispatch);
    }
  };
};

export function addProject(projectData, existingProjectId) {
  if (existingProjectId) {
    projectData = { ...projectData, id: existingProjectId };
  }
  return async (dispatch) => {
    const hitUrl = existingProjectId
      ? `${process.env.REACT_APP_FIREBASE_URL}/projects/${existingProjectId}.json`
      : `${process.env.REACT_APP_FIREBASE_URL}/projects.json`;

    const accessToken = localStorage.getItem("token");

    const {
      data: newProjectData,
      errorExists,
      errorDetails,
    } = await httpRequest(
      `${hitUrl}?auth=${accessToken}`,
      existingProjectId ? "PATCH" : "POST",
      JSON.stringify(projectData),
      {
        "Content-Type": "application/json",
      }
    );

    if (!errorExists) {
      if (newProjectData.name) {
        Object.keys(projectData).forEach(
          (key) => (newProjectData[key] = projectData[key])
        );
        newProjectData.id = newProjectData.name;
      }

      existingProjectId
        ? dispatch(projectsActions.updateProject(newProjectData))
        : dispatch(projectsActions.addProject(newProjectData));
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
    const hitUrl = `${process.env.REACT_APP_FIREBASE_URL}/projects/${projectId}.json`;

    const accessToken = localStorage.getItem("token");

    const { errorExists, errorDetails } = await httpRequest(
      `${hitUrl}?auth=${accessToken}`,
      "DELETE"
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
