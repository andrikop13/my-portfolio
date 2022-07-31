import Home from "./components/Layout/Home";
import { useLocation } from "react-router-dom";
import AboutMe from "./components/Sections/AboutMe";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

const App = () => {
  const location = useLocation();

  return (
    <Home location={location}>
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Home>
  );
};

export default App;
