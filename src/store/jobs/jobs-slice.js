const { createSlice } = require("@reduxjs/toolkit");

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    list: [],
    jobsChanged: false,
    jobDelete: false,
  },
  reducers: {
    fillData(state, action) {
      state.list = action.payload;
    },
    addJob(state, action) {
      const newJob = action.payload;
      const existingnJob = state.list.find((item) => item.id === newJob.id);

      if (!existingnJob) {
        state.list.push({
          id: newJob.id,
          position: newJob.position,
          organization: newJob.organization,
          descriptionItems: newJob.descriptionItems,
          date: newJob.date,
          link: newJob.link,
        });
        state.jobsChanged = true;
      } else {
        return;
      }
    },
    updateJob(state, action) {
      const findItem = state.list.findIndex(
        (job) => job.id === action.payload.id
      );

      state.list[findItem] = action.payload;
      state.jobsChanged = true;
    },
    deleteJob(state, action) {
      const filterJobs = state.list.filter((job) => job.id !== action.payload);

      state.list = filterJobs;
      state.jobDelete = true;
    },
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice;
