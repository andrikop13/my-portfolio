import styled from "styled-components";
import { responsive } from "@config";
import image from "@assets/images/myself.jpg";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const ImageContainer = styled.div`
  @media (max-width: ${responsive.phone[1]}rem) {
    text-align: center;
  }

  & .img-wrapper {
    position: relative;

    & .hero-img {
      animation: leftRotation 1s ;
      -webkit-animation: leftRotation 1s;
      transform: rotate(-10deg);
      width: 29rem;
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: all 0.25s;
    }

    &::before {
      animation: leftRotation 1s ;
      -webkit-animation: leftRotation 1s ;
      transform: rotate(-10deg);
      top: 0px;
      left: 0px;
      background-color: var(--green);
      width: 100%;
      height: 98%;
      mix-blend-mode: screen;
    }

    &::after {
      animation: rightRotation 1s ;
      -webkit-animation: rightRotation 1s;
      transform: rotate(10deg);
      border: 2px solid var(--green);
      top: -3.25%;
      left: -3.5%;
      width: 107%;
      height: 105%;
      z-index: -1;
    }

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: var(--border-radius);
      transition: all 0.25s;
    }

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        transform: rotate(0deg);
        box-shadow: inset 0 0 0 3px var(--green);
      }

      &:before{
        transform: rotate(0deg);
      }

      .hero-img {
        transform: rotate(0deg);
        filter: none;
        mix-blend-mode: normal;
      }
  }

  @keyframes rightRotation {
    from {
      opacity: 0;
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: rotate(10deg);
    }
  }

  @keyframes leftRotation {
    from {
      opacity: 0;
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: rotate(-10deg);
    }
  }

  @media (max-width: 75rem) {
    & .hero-img {
      width: 28rem;
    }
  }

  @media (max-width: ${responsive.tabletLandscape[1]}) {
    & .hero-img {
      width: 26rem;
    }
  }
`;

const MyImage = () => {
  const [stageTime, setStageTime] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      setStageTime(true);
    }, 250);
  });

  const transProps = {
    in: stageTime,
    classNames: "fadedown",
    timeout: 200,
  };

  return (
    <CSSTransition nodeRef={ref} {...transProps}>
      <ImageContainer>
        <div className="img-wrapper">
          <img src={image} className="hero-img" alt="My Profile"></img>
        </div>
      </ImageContainer>
    </CSSTransition>
  );
};

export default MyImage;
