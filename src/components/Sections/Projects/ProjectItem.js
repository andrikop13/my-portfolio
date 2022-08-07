import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectItem = ({ project, pIndex }) => {
  return (
    <li className="project-container" key={"project_" + pIndex}>
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${project.presentation_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.7",
        }}
      ></div>

      <div className="project-title">
        <h5 className="project-title__before">
          {(project.subtitle ??= "Project")}
        </h5>
        <h1 className="project-title__main">{project.title}</h1>
      </div>
      <div className="project-content">
        <div className="project-content__description">
          {project.description}
        </div>
      </div>
      <ul className="project-tools">
        {project.technologies_used.map((tool, t) => (
          <li key={"ptools" + pIndex + t}>{tool}</li>
        ))}
      </ul>

      <div className="project-anchors">
        {project.github && (
          <a href={project.github}>
            <VscGithubAlt size={21} color={"var(--white)"} />
          </a>
        )}
        {project.link && (
          <a href={project.link}>
            <BsBoxArrowUpRight
              size={21}
              color={"var(--white)"}
              style={{ marginTop: "-0.3rem" }}
            />
          </a>
        )}
      </div>
    </li>
  );
};

export default ProjectItem;
