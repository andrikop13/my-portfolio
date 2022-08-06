import { createRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import content from "../../../content/content";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  console.log("Change state showMore:", showMore);

  const handleMoreProjects = () => {
    setShowMore((prevState) => !prevState);
  };

  const PROJCETS_LIMIT = 3;
  const projects = content.projects;
  const firstThree = projects.slice(0, PROJCETS_LIMIT);
  const projectsToShow = showMore ? projects : firstThree;

  return (
    <section className="section-projects" id="projects">
      <h1 className="section-heading">Projects I've worked on</h1>
      <br />
      <br />
      <div>
        <TransitionGroup component={"ul"}>
          {projectsToShow.map((pr, p) => {
            let nodeRef = createRef(null);

            return (
              <CSSTransition
                key={p}
                classNames="fadeup"
                timeout={p >= PROJCETS_LIMIT ? (p - PROJCETS_LIMIT) * 300 : 300}
                exit={false}
                nodeRef={nodeRef}
              >
                <ProjectItem
                  project={pr}
                  pIndex={p}
                  style={{
                    transitionDelay: `${
                      p >= PROJCETS_LIMIT ? (p - PROJCETS_LIMIT) * 100 : 0
                    }ms`,
                  }}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
      <br />
      <div className="flex-button">
        <button className="small-button" onClick={handleMoreProjects}>
          {!showMore ? "Show More" : "Show Less"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
