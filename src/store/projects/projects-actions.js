import { projectsActions, uiActions } from "@store";

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
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/projects.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const projectData = await fetchData();
      updateState(projectData, projects, dispatch);
    } catch (error) {
      const response = await fetch(`../content/projects.json`);
      const projectData = await response.json();
      updateState(projectData.projects, projects, dispatch);
    }
  };
};

export function addProject(projectData, existingProjectId) {
  if (existingProjectId) {
    projectData = { ...projectData, id: existingProjectId };
  }
  return async (dispatch) => {
    const saveProject = async () => {
      const hitUrl = existingProjectId
        ? `${process.env.REACT_APP_FIREBASE_URL}/projects/${existingProjectId}.json`
        : `${process.env.REACT_APP_FIREBASE_URL}/projects.json`;

      const accessToken = localStorage.getItem("token");

      const response = await fetch(`${hitUrl}?auth=${accessToken}`, {
        method: existingProjectId ? "PATCH" : "POST",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(response.status + " - " + response.statusText);
      }

      const data = await response.json();
      return data;
    };

    try {
      const responseData = await saveProject();

      if (responseData.name) {
        projectData.id = responseData.name;
      }

      existingProjectId
        ? dispatch(projectsActions.updateProject(projectData))
        : dispatch(projectsActions.addProject(projectData));
    } catch (error) {
      dispatch(
        uiActions.showMessage({
          message: error.message,
          status: "error",
        })
      );
    }
  };
}

export function deleteProject(projectId) {
  return async (dispatch) => {
    const deleteId = async () => {
      const hitUrl = `${process.env.REACT_APP_FIREBASE_URL}/projects/${projectId}.json`;

      const accessToken = localStorage.getItem("token");

      const response = await fetch(`${hitUrl}?auth=${accessToken}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(response.status + " - " + response.statusText);
      }

      const data = await response.json();
      return data;
    };

    try {
      await deleteId();
      dispatch(projectsActions.deleteProject(projectId));
    } catch (error) {
      dispatch(
        uiActions.showMessage({
          message: error.message,
          status: "error",
        })
      );
    }
  };
}
