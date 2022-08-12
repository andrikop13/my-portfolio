import { projectsActions } from "./projects-slice";

export const fetchProjectsData = (fetchProjectsFn) => {
  return (dispatch) => {
    const projectsCall = (data) => {
      const projects = data.projects;
      dispatch(projectsActions.fillData(projects));
    };

    fetchProjectsFn({ url: "../content/projects.json" }, projectsCall);
  };
};
