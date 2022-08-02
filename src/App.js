import Home from "./components/Layout/Home";
import { useLocation } from "react-router-dom";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import { useEffect, useState } from "react";
import ButtonToTop from "./components/Layout/ButtonToTop/Button";
// import "../src/jquery.tagcanvas.js";
// import $ from "jquery";

// const beginTagCanvas = () => {
//   $(document).ready(function () {
//     setTimeout(() => {
//       console.log($("#myCanvas"));
//       if (
//         !$("#myCanvas").tagcanvas(
//           {
//             // textColour: "#ff0000",
//             outlineColour: "#ff00ff",
//             reverse: true,
//             depth: 0.8,
//             maxSpeed: 0.05,
//             textFont: null,
//             textColour: null,
//             weightMode: "both",
//             weight: true,
//             weightGradient: {
//               0: "#f00", // red
//               //0.33: '#ff0', // yellow
//               //0.66: '#0f0', // green
//               1: "#00f", // blue
//             },
//           },
//           "tags"
//         )
//       ) {
//         // something went wrong, hide the canvas container
//         $("#myCanvasContainer").hide();
//       }
//     });
//   }, 1000);
// };

const App = () => {
  const location = useLocation();
  const [showButtonTop, setShowButtonTop] = useState(false);

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

  const handleEndOfHero = (heroRef) => {
    if (heroRef) {
      const { clientHeight } = heroRef;
      if (window.pageYOffset >= clientHeight) {
        !showButtonTop && setShowButtonTop(true);
      } else {
        showButtonTop && setShowButtonTop(false);
      }
    }
  };

  return (
    <Home location={location}>
      {showButtonTop && <ButtonToTop />}
      <Hero handleHeroScrolling={handleEndOfHero} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Home>
  );
};

export default App;
