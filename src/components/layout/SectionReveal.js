import Fade from "react-reveal/Fade";

const SectionReveal = (props) => {
  return <Fade clear>{props.children}</Fade>;
};

export default SectionReveal;
