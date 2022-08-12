import { jobsActions } from "./jobs-slice";

export const fetchJobsData = (fetchJobsFn) => {
  return (dispatch) => {
    const jobsCall = (data) => {
      const jobs = data.jobs;
      dispatch(jobsActions.fillData(jobs));
    };

    fetchJobsFn({ url: "../content/experience.json" }, jobsCall);
  };
};
