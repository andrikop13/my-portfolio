import { jobsActions } from "./jobs-slice";

export const fetchJobsData = (fetchJobsFn) => {
  return (dispatch) => {
    const jobsCall = (data) => {
      const jobs = [];

      Object.entries(data.jobs).forEach(([key, value]) => {
        value["id"] = key;
        jobs.push(value);
      });
      dispatch(jobsActions.fillData(jobs));
    };

    fetchJobsFn({ url: "../content/experience.json" }, jobsCall);
  };
};
