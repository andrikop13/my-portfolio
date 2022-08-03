import { Link } from "react-router-dom";
import ParticlesBackground from "../../ParticlesBackground";
import MyImage from "./MyImage";

const Hero = (props) => {
  return (
    <section className="section-hero">
      <ParticlesBackground />
      <div className="hero" id="hero-section">
        <div className="hero__text-box">
          <div className="heading-stylist">Hello, my name is</div>
          <div className="heading-primary--main">Andreas Andrikopoulos</div>
          <div className="heading-primary--sub">
            I build interactive web applications.
          </div>
          <div className="hero__description-text u-margin-bottom-medium">
            I am an Electrical & Computer Engineer with passion for software
            engineering, computer science and web application development. My
            work experience and education has led me to develop skills at web
            development, computer networking, IoT platforms and machine
            learning.
          </div>
          <Link to="/#contact" className="hero__contact-button">
            Contact me!
          </Link>
        </div>
        <div className="hero__image-box">
          <MyImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
