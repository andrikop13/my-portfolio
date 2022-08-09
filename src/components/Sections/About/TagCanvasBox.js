import TagsCanvas from "react-tags-canvas";
import { skills } from "../../../content/content";

const TagCanvasBox = () => {
  return (
    <TagsCanvas
      textColour=""
      maxSpeed={0.05}
      reverse={true}
      initial={[0.25, -0.25]}
      width={600}
      height={600}
      shuffleTags
      shape="sphere"
      zoom={1}
      noSelect
      pinchZoom
      tags={skills}
    />
  );
};

export default TagCanvasBox;
