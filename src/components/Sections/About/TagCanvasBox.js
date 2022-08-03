import TagsCanvas from "react-tags-canvas";

const TagCanvasBox = () => {
  return (
    <TagsCanvas
      textColour=""
      maxSpeed={0.05}
      reverse={true}
      freezeActive
      initial={[0.2, -0.2]}
      width={500}
      height={500}
      shuffleTags
      shape="sphere"
      zoom={0.95}
      noSelect
      pinchZoom
      tags={[
        { value: "Javascript (ES6+)", weight: 30 },
        { value: "Typescript", weight: 30 },
        { value: "Angular", weight: 30 },
        { value: "RxJS", weight: 30 },
        { value: "React", weight: 30 },
        { value: "Redux", weight: 20 },
        { value: "HTML5", weight: 20 },
        { value: "CSS3", weight: 20 },
        { value: "SCSS", weight: 20 },
        { value: "PrimeNg", weight: 20 },
        { value: "Nebular", weight: 20 },
        { value: "Bootstrap", weight: 20 },
        { value: "Git", weight: 20 },
        { value: "NodeJS", weight: 15 },
        { value: "Python", weight: 15 },
        { value: "PySpark", weight: 15 },
      ]}
    />
  );
};

export default TagCanvasBox;
