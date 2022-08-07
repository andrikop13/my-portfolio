import styled from "styled-components";
import { responsive } from "../../../config/config";

const ImageContainer = styled.div`
  @media (max-width: ${responsive.phone[1]}rem) {
    text-align: center;
  }

  & .img-wrapper {
    position: relative;

    & .hero-img {
      animation: leftRotation 1s;
      -webkit-animation: leftRotation 1s;
      transform: rotate(-10deg);
      width: 29rem;
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
    }

    &::before {
      animation: leftRotation 1s;
      -webkit-animation: leftRotation 1s;
      transform: rotate(-10deg);
      top: 0px;
      transform: rotate(-10deg);
      left: 0px;
      background-color: var(--green);
      width: 100%;
      height: 98%;
      mix-blend-mode: screen;
    }

    &::after {
      animation: rightRotation 1s;
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
      transition: var(--transition);
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
      transform: rotate(0deg);
    }
    to {
      transform: rotate(10deg);
    }
  }

  @keyframes leftRotation {
    from {
      transform: rotate(0deg);
    }
    to {
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
  return (
    <ImageContainer>
      <picture>
        <div className="img-wrapper">
          <img
            src={require("../../../assets/images/mySelf_1.jpg")}
            className="hero-img"
            alt="My Profile"
          ></img>
        </div>
      </picture>
    </ImageContainer>
  );
};

export default MyImage;
