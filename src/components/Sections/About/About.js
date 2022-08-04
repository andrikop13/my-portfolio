import Fade from "react-reveal/Fade";
import TagCanvasBox from "./TagCanvasBox";

const About = () => {
  return (
    <section className="section-about" id="about">
      <h1 className="section-heading">About Me</h1>
      <div className="about">
        <div className="about__description-text">
          <p className="u-margin-bottom-small">
            Hello, my name is Andreas Andrikopoulos and I am an electrical
            engineer graduate from the
            <a
              href="http://www.ece.upatras.gr/index.php/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Department of Electrical and Computer Engineering{" "}
            </a>{" "}
            at the Polytechnic school of Patras. My involvement in software
            engineering started in 2018, when I decided in the last semester of
            university courses to apply for an internship at an IT company.
          </p>

          <p className="u-margin-bottom-small">
            All these years, i've had the privilege of working at an innovative
            company called{" "}
            <a
              href="https://meazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meazon S.A.
            </a>
            , where we built web services and IoT devices, like smart meters,
            light controllers, water meters and more, for energy management. My
            main focus is building interactive, responsive and functional web
            applications.
          </p>
          <p className="u-margin-bottom-small">
            I also graduated from the{" "}
            <a
              href="https://www.ceid.upatras.gr/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Department of Computer Engineering & Informatics
            </a>{" "}
            with a master's degree in machine learning and data science, named{" "}
            <a
              href="https://ddcdm.ceid.upatras.gr/en/641-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data Driven Computing & Decision Making.
            </a>
          </p>
          <p className="u-margin-bottom-small">
            Here are a few technologies i've been mainly working last years:
          </p>
          <div className="skills_grid">
            <ul>
              <li>Javascript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>Typescript</li>
              <li>Angular</li>
              <li>PySpark</li>
            </ul>
          </div>
        </div>
        <div className="about__tags-box">
          <Fade right>
            <TagCanvasBox />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
