import { projectsActions } from "./projects-slice";

export const fetchProjectsData = (fetchProjectsFn) => {
  return (dispatch) => {
    const projectsCall = (data) => {
      const projects = [];

      Object.entries(data.projects).forEach(([key, value]) => {
        value["id"] = key;
        projects.push(value);
      });
      dispatch(projectsActions.fillData(projects));
    };

    fetchProjectsFn({ url: "../content/projects.json" }, projectsCall);
  };
};

export async function addProject(projectData, addProjectFn) {
  console.log(projectData);
  return;
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
