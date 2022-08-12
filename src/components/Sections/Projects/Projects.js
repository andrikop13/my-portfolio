import { createRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProjectItem from "./ProjectItem";
import { useSelector } from "react-redux";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const projects = useSelector((state) => state.projects.list);

  const handleMoreProjects = () => {
    setShowMore((prevState) => !prevState);
  };

  const PROJECTS_LIMIT = 3;
  const firstThree = projects.slice(0, PROJECTS_LIMIT);
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
                timeout={p >= PROJECTS_LIMIT ? (p - PROJECTS_LIMIT) * 300 : 300}
                exit={false}
                nodeRef={nodeRef}
              >
                <ProjectItem
                  key={p}
                  project={pr}
                  pIndex={p}
                  style={{
                    transitionDelay: `${
                      p >= PROJECTS_LIMIT ? (p - PROJECTS_LIMIT) * 100 : 0
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
