import { jobsActions } from "./jobs-slice";

export const fetchJobsData = (fetchJobsFn) => {
  const jobs = [];
  const updateState = (projectData, projects, dispatch) => {
    Object.entries(projectData).forEach(([key, value]) => {
      value["id"] = key;
      projects.push(value);
    });
    dispatch(jobsActions.fillData(jobs));
  };

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/jobs.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const jobData = await fetchData();
      updateState(jobData, jobs, dispatch);
    } catch (error) {
      const response = await fetch(`../content/experience.json`);
      const jobData = await response.json();
      updateState(jobData.jobs, jobs, dispatch);
    }
  };
};
