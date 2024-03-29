import { createRef, useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loader from "react-loaders";
import { ProjectItem } from "@components/sections";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  let projects = useSelector((state) => state.projects.list);
  const projectsSorted = [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const handleMoreProjects = () => {
    setShowMore((prevState) => !prevState);
  };

  const PROJECTS_LIMIT = 3;
  const firstThree = projectsSorted.slice(0, PROJECTS_LIMIT);
  const projectsToShow = showMore ? projectsSorted : firstThree;

  return (
    <section className="section-projects" id="projects">
      <h1 className="section-heading">Projects I've worked on</h1>
      <br />
      <br />

      {!projects.length && (
        <div className="loader-container">
          <Loader type="ball-grid-pulse" />
        </div>
      )}
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

      {projects.length > PROJECTS_LIMIT && (
        <div className="flex-button">
          <button className="small-button" onClick={handleMoreProjects}>
            {!showMore ? "Show More" : "Show Less"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
