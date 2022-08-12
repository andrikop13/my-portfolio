import { Route, Routes } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjectsData } from "./store/projects/projects-actions";
import useHttp from "./hooks/use-http";
import { fetchJobsData } from "./store/jobs/jobs-actions";
import Main from "./components/Layout/MainRoute";
import NotFound from "./components/Layout/NotFound";

const App = () => {
  const dispatch = useDispatch();
  const { sendRequest: fetchData } = useHttp();

  useEffect(() => {
    dispatch(fetchProjectsData(fetchData));
    dispatch(fetchJobsData(fetchData));
  }, [dispatch, fetchData]);

  return (
    <>
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
