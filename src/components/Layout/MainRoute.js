import { Route, Routes, useLocation } from "react-router-dom";
import About from "../Sections/About/About";
import Contact from "../Sections/Contact/Contact";
import Experience from "../Sections/Experience/Experience";
import Hero from "../Sections/Hero/Hero";
import Projects from "../Sections/Projects/Projects";
import ButtonToTop from "./ButtonToTop/Button";
import Home from "./Home";
import NotFound from "./NotFound";
import SectionReveal from "./SectionReveal";

const Main = () => {
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

export default Main;
