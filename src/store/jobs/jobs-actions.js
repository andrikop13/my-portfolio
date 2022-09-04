import { jobsActions, uiActions } from "@store";
import { httpRequest } from "@utils";
import { URL_CONFIG } from "@config";

const jobsURL = `${process.env.REACT_APP_BACKEND_URL}/${URL_CONFIG.jobs.crudURL}`;

export const fetchJobsData = () => {
  const updateState = (jobsData, dispatch) => {
    const jobs = jobsData.data.jobs;
    dispatch(jobsActions.fillData(jobs));
  };

  return async (dispatch) => {
    const { data: jobData, errorExists } = await httpRequest(jobsURL, "GET");

    if (!errorExists) {
      updateState(jobData, dispatch);
    } else {
      const { data: jobData } = await httpRequest(
        `../content/experience.json`,
        "GET"
      );
      updateState(jobData.jobs, dispatch);
    }
  };
};

export function addJob(jobData, existingJobId) {
  if (existingJobId) {
    jobData = { ...jobData, id: existingJobId };
  }
  return async (dispatch) => {
    const accessToken = localStorage.getItem("token");

    const {
      data: newJobData,
      errorExists,
      errorDetails,
    } = await httpRequest(
      existingJobId ? `${jobsURL}/${existingJobId}` : jobsURL,
      existingJobId ? "PATCH" : "POST",
      JSON.stringify(jobData),
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    );

    if (!errorExists) {
      const data = newJobData.data.job;

      existingJobId
        ? dispatch(jobsActions.updateJob(data))
        : dispatch(jobsActions.addJob(data));
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

export function deleteJob(jobId) {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("token");

    const { errorExists, errorDetails } = await httpRequest(
      `${jobsURL}/${jobId}`,
      "DELETE",
      null,
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );

    if (!errorExists) {
      dispatch(jobsActions.deleteJob(jobId));
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
