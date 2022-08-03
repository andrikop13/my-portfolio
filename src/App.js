import Home from "./components/Layout/Home";
import { useLocation } from "react-router-dom";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import { useEffect } from "react";
import ButtonToTop from "./components/Layout/ButtonToTop/Button";

const App = () => {
  const location = useLocation();

  // Sets target="_blank" rel="noopener noreferrer" on external links, to open on new tab.
  const handleExternalLinks = () => {
    const links = Array.from(document.querySelectorAll("a"));

    if (links.length > 0) {
      links.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  useEffect(() => {
    handleExternalLinks();
    // beginTagCanvas();
  }, []);

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
