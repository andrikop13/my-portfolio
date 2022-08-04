import TagsCanvas from "react-tags-canvas";

const TagCanvasBox = () => {
  return (
    <TagsCanvas
      textColour=""
      maxSpeed={0.05}
      reverse={true}
      freezeActive
      initial={[0.2, -0.2]}
      width={600}
      height={600}
      shuffleTags
      shape="sphere"
      zoom={1}
      noSelect
      pinchZoom
      tags={[
        { value: "Javascript (ES6+)", weight: 30 },
        { value: "Typescript", weight: 30 },
        { value: "Angular", weight: 30 },
        { value: "RxJS", weight: 30 },
        { value: "NgRx", weight: 15 },
        { value: "React", weight: 30 },
        { value: "Redux", weight: 20 },
        { value: "HTML5", weight: 30 },
        { value: "CSS3", weight: 30 },
        { value: "SCSS", weight: 30 },
        { value: "PrimeNg", weight: 20 },
        { value: "Nebular", weight: 20 },
        { value: "Bootstrap", weight: 20 },
        { value: "Git", weight: 30 },
        { value: "NodeJS", weight: 15 },
        { value: "Python", weight: 15 },
        { value: "PySpark", weight: 15 },
      ]}
    />
  );
};

export default TagCanvasBox;
