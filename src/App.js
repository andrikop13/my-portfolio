import Home from "./components/Layout/Home";
import { useLocation } from "react-router-dom";
import Experience from "./components/Sections/Experience/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import ButtonToTop from "./components/Layout/ButtonToTop/Button";
import SectionReveal from "./components/Layout/SectionReveal";

const App = () => {
  const location = useLocation();

  return (
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
  );
};

export default App;
