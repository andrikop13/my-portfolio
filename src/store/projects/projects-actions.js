import { projectsActions } from "./projects-slice";

export const fetchProjectsData = (fetchProjectsFn, error, planB = false) => {
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

export async function addProject(projectData, addProjectFn) {
  console.log(projectData);

  return (dispatch) => {
    const projectsUpdate = (data) => {
      console.log(data);

      // dispatch(projectsActions.addProject(projects));
    };

    addProjectFn(
      {
        url: `${process.env.REACT_APP_FIREBASE_URL}/projects.json`,
        body: JSON.stringify(projectData),
      },
      projectsUpdate
    );
  };
}
