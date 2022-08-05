import { useState } from "react";
import content from "../../../content/content";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

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
        <ul>
          {projectsToShow.map((pr, p) => (
            <li className="project-container" key={"project_" + p}>
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${pr.presentation_img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: "0.7",
                }}
              ></div>

              <button className="image-btn">Images</button>

              <div className="project-title">
                <h5 className="project-title__before">
                  {(pr.subtitle ??= "Project")}
                </h5>
                <h1 className="project-title__main">{pr.title}</h1>
              </div>
              <div className="project-content">
                <div className="project-content__description">
                  {pr.description}
                </div>
              </div>
              <ul className="project-tools">
                {pr.technologies_used.map((tool, t) => (
                  <li key={"ptools" + p + t}>{tool}</li>
                ))}
              </ul>
              <div className="project-anchors"></div>
            </li>
          ))}
        </ul>
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
