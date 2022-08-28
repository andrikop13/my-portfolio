import { VscGithubAlt } from "react-icons/vsc";
import { BsBoxArrowUpRight } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectItem = ({ project, pIndex }) => {
  return (
    <li className="project-container" key={pIndex}>
      <div
        className="project-image"
        style={{
          backgroundPosition: "center",
          opacity: "0.85",
        }}
      >
        <Carousel
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          dynamicHeight={false}
          swipeable={true}
          emulateTouch={true}
        >
          {project.images.map((img, i) => (
            <img
              className="slider-image"
              src={img}
              alt={`image_${i}`}
              key={`image_${i}`}
            />
          ))}
        </Carousel>
      </div>

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
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <VscGithubAlt size={21} color={"var(--white)"} />
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
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
