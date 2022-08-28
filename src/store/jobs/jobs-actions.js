import { jobsActions, uiActions } from "@store";

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

export function addJob(jobData, existingJobId) {
  if (existingJobId) {
    jobData = { ...jobData, id: existingJobId };
  }
  return async (dispatch) => {
    const saveJob = async () => {
      const hitUrl = existingJobId
        ? `${process.env.REACT_APP_FIREBASE_URL}/jobs/${existingJobId}.json`
        : `${process.env.REACT_APP_FIREBASE_URL}/jobs.json`;

      const accessToken = localStorage.getItem("token");

      const response = await fetch(`${hitUrl}?auth=${accessToken}`, {
        method: existingJobId ? "PATCH" : "POST",
        body: JSON.stringify(jobData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.status + " - " + response.statusText);
      }

      const data = await response.json();
      return data;
    };

    try {
      const responseData = await saveJob();

      if (responseData.name) {
        jobData.id = responseData.name;
      }

      existingJobId
        ? dispatch(jobsActions.updateJob(jobData))
        : dispatch(jobsActions.addJob(jobData));
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

export function deleteJob(jobId) {
  return async (dispatch) => {
    const deleteId = async () => {
      const hitUrl = `${process.env.REACT_APP_FIREBASE_URL}/jobs/${jobId}.json`;

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
      dispatch(jobsActions.deleteJob(jobId));
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
