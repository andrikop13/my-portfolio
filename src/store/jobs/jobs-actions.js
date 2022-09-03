import { jobsActions, uiActions } from "@store";
import { httpRequest } from "@utils";

export const fetchJobsData = () => {
  const jobs = [];
  const updateState = (projectData, projects, dispatch) => {
    Object.entries(projectData).forEach(([key, value]) => {
      value["id"] = key;
      projects.push(value);
    });
    dispatch(jobsActions.fillData(jobs));
  };

  return async (dispatch) => {
    const { data: jobData, errorExists } = await httpRequest(
      `${process.env.REACT_APP_FIREBASE_URL}/jobs.json`,
      "GET"
    );

    if (!errorExists) {
      updateState(jobData, jobs, dispatch);
    } else {
      const { data: jobData } = await httpRequest(
        `../content/experience.json`,
        "GET"
      );
      updateState(jobData.jobs, jobs, dispatch);
    }
  };
};

export function addJob(jobData, existingJobId) {
  if (existingJobId) {
    jobData = { ...jobData, id: existingJobId };
  }
  return async (dispatch) => {
    const hitUrl = existingJobId
      ? `${process.env.REACT_APP_FIREBASE_URL}/jobs/${existingJobId}.json`
      : `${process.env.REACT_APP_FIREBASE_URL}/jobs.json`;

    const accessToken = localStorage.getItem("token");

    const {
      data: newJobData,
      errorExists,
      errorDetails,
    } = await httpRequest(
      `${hitUrl}?auth=${accessToken}`,
      existingJobId ? "PATCH" : "POST",
      JSON.stringify(jobData),
      {
        "Content-Type": "application/json",
      }
    );

    if (!errorExists) {
      if (newJobData.name) {
        jobData.id = newJobData.name;
      }

      existingJobId
        ? dispatch(jobsActions.updateJob(newJobData))
        : dispatch(jobsActions.addJob(newJobData));
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
    const hitUrl = `${process.env.REACT_APP_FIREBASE_URL}/jobs/${jobId}.json`;

    const accessToken = localStorage.getItem("token");

    const { errorExists, errorDetails } = await httpRequest(
      `${hitUrl}?auth=${accessToken}`,
      "DELETE"
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
