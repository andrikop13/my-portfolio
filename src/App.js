import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Home, Main, NotFound, AnimationLayout } from "@components/layout";
import { ParticlesBackground } from "@components/particles";
import {
  fetchProjectsData,
  fetchJobsData,
  projectsActions,
  uiActions,
  jobsActions,
} from "@store";
import {
  MainDash,
  Login,
  JobList,
  ProjectList,
  JobForm,
  ProjectForm,
  ProtectedRoute,
  Admin,
} from "@components/dashboard";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const projectsChanged = useSelector(
    (state) => state.projects.projectsChanged
  );
  const jobsChanged = useSelector((state) => state.jobs.jobsChanged);

  const deletedProject = useSelector((state) => state.projects.projectDelete);
  const deletedJob = useSelector((state) => state.jobs.jobDelete);

  useEffect(() => {
    dispatch(fetchProjectsData());
    dispatch(fetchJobsData());

    if (projectsChanged) {
      dispatch(
        uiActions.showMessage({
          message: "Projects saved successfully",
          status: "success",
        })
      );
      dispatch(projectsActions.updateFlag({ flag: "save", value: false }));
    }

    if (deletedProject) {
      dispatch(
        uiActions.showMessage({
          message: "Project was deleted successfully",
          status: "success",
        })
      );
      dispatch(projectsActions.updateFlag({ flag: "delete", value: false }));
    }

    if (jobsChanged) {
      dispatch(
        uiActions.showMessage({
          message: "Jobs saved successfully",
          status: "success",
        })
      );
      dispatch(jobsActions.updateFlag({ flag: "save", value: false }));
    }

    if (deletedJob) {
      dispatch(
        uiActions.showMessage({
          message: "Job was deleted successfully",
          status: "success",
        })
      );
      dispatch(jobsActions.updateFlag({ flag: "delete", value: false }));
    }
  }, [deletedJob, deletedProject, dispatch, jobsChanged, projectsChanged]);

  return (
    <>
      <ParticlesBackground />
      <Home location={location}>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route element={<AnimationLayout />}>
            <Route path="/admin" element={<Admin />} />

            <Route path="/admin/login" element={<Login />} />

            <Route path="" element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<MainDash />} />
            </Route>

            <Route path="" element={<ProtectedRoute />}>
              <Route path="/admin/jobs" element={<JobList />} />
              <Route path="/admin/jobs/:jobId" element={<JobForm />} />
              <Route path="/admin/jobs/newJob" element={<JobForm />} />
            </Route>

            <Route path="" element={<ProtectedRoute />}>
              <Route path="/admin/projects" element={<ProjectList />} />
              <Route
                path="/admin/projects/:projectId"
                element={<ProjectForm />}
              />
              <Route
                path="/admin/projects/newProject"
                element={<ProjectForm />}
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Home>
    </>
  );
};

export default App;
