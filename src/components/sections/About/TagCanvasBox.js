import TagsCanvas from "react-tags-canvas";
import { skills } from "@config";

const TagCanvasBox = () => {
  return (
    <TagsCanvas
      textColour=""
      maxSpeed={0.05}
      reverse={false}
      initial={[0.25, -0.25]}
      width={600}
      height={600}
      shuffleTags
      shape="sphere"
      zoom={1}
      noSelect
      pinchZoom
      wheelZoom={false}
      tags={skills}
    />
  );
};

export default TagCanvasBox;
