import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjectsData } from "./store/projects/projects-actions";
import useHttp from "./hooks/use-http";
import { fetchJobsData } from "./store/jobs/jobs-actions";
import Main from "./components/Layout/MainRoute";
import NotFound from "./components/Layout/NotFound";
import MainDash from "./components/Dashboard/MainDash";
import Login from "./components/Dashboard/Login/Login";
import JobList from "./components/Dashboard/Experience/JobList";
import ProjectList from "./components/Dashboard/Projects/ProjectList";
import JobForm from "./components/Dashboard/Experience/JobForm";
import ProjectForm from "./components/Dashboard/Projects/ProjectForm";
import ProtectedRoute from "./components/Dashboard/ProtectedRoute";
import Home from "./components/Layout/Home";
import AuthContext from "./store/auth-context";
import Admin from "./components/Dashboard/Admin";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { sendRequest: fetchData } = useHttp();
  const authCtx = useContext(AuthContext);

  const { isLoggedIn } = authCtx;

  useEffect(() => {
    dispatch(fetchProjectsData(fetchData));
    dispatch(fetchJobsData(fetchData));
  }, [dispatch, fetchData]);

  return (
    <>
      <ParticlesBackground />
      <Home location={location}>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/admin/login" element={<Login />} />

          <Route path="" element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<MainDash />} />
          </Route>

          <Route path="" element={<ProtectedRoute />}>
            <Route path="/admin/jobs" element={<JobList />} />
            <Route path="/admin/jobs/:jobId" element={<JobForm />} />
          </Route>

          <Route path="" element={<ProtectedRoute />}>
            <Route path="projects" element={<ProjectList />}>
              <Route path="projects/:projectId" element={<ProjectForm />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Home>
    </>
  );
};

export default App;
