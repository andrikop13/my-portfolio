import MainTabWrapper from "./MainTabWrapper";

const Experience = () => {
  return (
    <section className="section-experience" id="experience">
      <h1 className="section-heading">Where I've worked</h1>

      <div className="experience">
        <div className="experience__jobs-tab">
          <MainTabWrapper />
        </div>
      </div>
    </section>
  );
};

export default Experience;
