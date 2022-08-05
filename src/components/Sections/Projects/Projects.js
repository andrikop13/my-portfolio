import content from "../../../content/content";

const Projects = () => {
  const projects = content.projects;

  return (
    <section className="section-projects" id="projects">
      <h1 className="section-heading">Projects I've worked on</h1>
      <br />
      <br />
      <div>
        <ul>
          {projects.map((pr, p) => (
            <div className="project-container">
              <div
                className="project-image"
                style={{
                  background: `url(${pr.presentation_img})`,
                  backgroundSize: "cover",
                }}
              >
                <button
                  className="project-image__btn"
                  onClick={() => console.log("Button pressed")}
                >
                  Images
                </button>
              </div>

              <div className="project-title">
                <h5 className="project-title__before">Project</h5>
                <h1 className="project-title__main">{pr.title}</h1>
              </div>
              <div className="project-content">
                <div className="project-content__description">
                  {pr.description}
                </div>
              </div>
              <div className="project-tools">
                {pr.technologies_used.map((tool, t) => (
                  <li key={"ptools" + p + t}>{tool}</li>
                ))}
              </div>
              <div className="project-anchors"></div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
