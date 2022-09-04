import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Home, Main, NotFound, AnimationLayout } from "@components/layout";
import { ParticlesBackground } from "@components/particles";
import { fetchProjectsData, fetchJobsData } from "@store";
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

  useEffect(() => {
    dispatch(fetchProjectsData());
    dispatch(fetchJobsData());
  }, [dispatch]);

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
