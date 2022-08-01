import Home from "./components/Layout/Home";
import { useLocation } from "react-router-dom";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Hero from "./components/Sections/Hero/Hero";

const App = () => {
  const location = useLocation();

  return (
    <Home location={location}>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Home>
  );
};

export default App;
