import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobs/jobs-slice";
import projectSlice from "./projects/projects-slice";
import uiSlice from "./ui/ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    projects: projectSlice.reducer,
    jobs: jobsSlice.reducer,
  },
});

export default store;
