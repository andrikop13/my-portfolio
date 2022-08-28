import { configureStore } from "@reduxjs/toolkit";
import { jobsSlice, projectSlice, uiSlice } from "@store";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    projects: projectSlice.reducer,
    jobs: jobsSlice.reducer,
  },
});

export default store;
export { default as jobsSlice, jobsActions } from "./jobs/jobs-slice";
export { fetchJobsData, addJob, deleteJob } from "./jobs/jobs-actions";
export {
  default as projectSlice,
  projectsActions,
} from "./projects/projects-slice";
export {
  fetchProjectsData,
  addProject,
  deleteProject,
} from "./projects/projects-actions";
export { default as uiSlice, uiActions } from "./ui/ui-slice";
export { default as AuthContext } from "./auth-context";
export { AuthContextProvider } from "./auth-context";
