import Home from "./components/Layout/Home";
import { useLocation } from "react-router-dom";
import Experience from "./components/Sections/Experience/Experience";
import Projects from "./components/Sections/Projects/Projects";
import Contact from "./components/Sections/Contact/Contact";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import ButtonToTop from "./components/Layout/ButtonToTop/Button";
import SectionReveal from "./components/Layout/SectionReveal";
import ParticlesBackground from "./components/ParticlesBackground";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjectsData } from "./store/projects/projects-actions";
import useHttp from "./hooks/use-http";
import { fetchJobsData } from "./store/jobs/jobs-actions";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { sendRequest: fetchData } = useHttp();

  useEffect(() => {
    dispatch(fetchProjectsData(fetchData));
    dispatch(fetchJobsData(fetchData));
  }, [dispatch, fetchData]);

  return (
    <>
      <ParticlesBackground />
      <Home location={location}>
        <ButtonToTop />

        <Hero />
        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </Home>
    </>
  );
};

export default App;
