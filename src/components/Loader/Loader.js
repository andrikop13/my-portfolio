import anime from "animejs";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import MyLogo from "../../assets/icons/MyLogo";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    opacity: ${(props) => (props.isOverlay ? 1 : 0)};

    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
    }

    #logoText {
      opacity: 0;
    }
  }
`;

const Loader = (props) => {
  const [isOverlay, setIsOverlay] = useState(false);

  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => props.finishLoading(),
    });

    loader
      .add({
        targets: "#myLogo path",
        delay: 0, //duration : 0
        duration: 0, // duration: 1500
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logoText",
        duration: 0, //duration: 700
        easing: "easeInOutQuart",
        opacity: 1,
      });
  }, [props]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsOverlay(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <LoaderWrapper isOverlay={isOverlay}>
      <div className="logo-wrapper">
        <MyLogo></MyLogo>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
