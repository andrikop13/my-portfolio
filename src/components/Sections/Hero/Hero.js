import ParticlesBackground from "../../ParticlesBackground";
import MyImage from "./MyImage";

const Hero = () => {
  return (
    <section className="section-about">
      <ParticlesBackground />
      <div className="about">
        <div className="about__text-box">
          <div className="heading-stylist">Hello, my name is</div>
          <div className="heading-primary--main">Andreas Andrikopoulos</div>
          <div className="heading-primary--sub">
            I build interactive web applications.
          </div>
          <div>
            dfdsdsfdsfdsfdsfdsafadsfdsfdsfdasfdsfdsfasdfdfsf
            afadsfadsfadsfadsfdsfdsafdsfdsfdsfdsafdsfdasafdsafadsf
            fdsafdsfasfdsfdsfdfdfafadfdfafafdafadsfdsfdsfdsfdsfsadfasd
          </div>
        </div>
        <div className="about__image-box">
          <MyImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
