import Home from "./components/Layout/Home";
import { useLocation } from "react-router-dom";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import ButtonToTop from "./components/Layout/ButtonToTop/Button";

const App = () => {
  const location = useLocation();

  return (
    <Home location={location}>
      <ButtonToTop />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Home>
  );
};

export default App;
