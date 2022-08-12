const { createSlice } = require("@reduxjs/toolkit");

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    list: [],
  },
  reducers: {
    fillData(state, action) {
      state.list = action.payload;
    },
    addJob(state, action) {
      const newJob = action.payload;
      const existingnJob = state.items.find(
        (item) => item.title === newJob.title
      );

      if (!existingnJob) {
        state.list.push({
          position: newJob.position,
          organization: newJob.organization,
          descriptionItems: newJob.descriptionItems,
          date: newJob.date,
          link: newJob.link,
        });
      } else {
        return;
      }
    },
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice;
