import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
} from "@components/sections";

import { ButtonToTop, SectionReveal } from "@components/layout";

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;
