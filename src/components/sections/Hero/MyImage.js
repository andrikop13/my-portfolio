import styled from "styled-components";
import { responsive } from "@config";
import { myProfileImgUrl } from "@config";
import { myProfileGitHubUrl } from "@config";
import { Roll } from "react-reveal";

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
      width: 290px;
      height: 320px;
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: all 0.25s;
    }

    &::before {
      animation: leftRotation 1s;
      -webkit-animation: leftRotation 1s;
      transform: rotate(-10deg);
      background-color: var(--green);
      width: 100%;
      height: 99%;
      z-index: -1;
    }

    &::after {
      animation: rightRotation 1s;
      -webkit-animation: rightRotation 1s;
      transform: rotate(10deg);
      border: 3px solid var(--green);
      top: -4.3%;
      left: -4.75%;
      width: 109.25%;
      height: 107.5%;
      z-index: -2;
    }

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 2px;
      transition: all 0.25s;
    }

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        transform: rotate(0deg);
        box-shadow: inset 0 0 0 4px var(--green);
      }

      &:before{
        transform: rotate(0deg);
      }

      .hero-img {
        transform: rotate(0deg);
        filter: none;
        border-radius: 1px;
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
      width: 260px;
      height: 290px
    }
  }

  @media (max-width: ${responsive.tabletLandscape[1]}) {
    & .hero-img {
      width: 270px;
      height: 300px
    }
  }
`;

const MyImage = () => {
  return (
    <Roll right>
      <ImageContainer>
        <div className="img-wrapper">
          <img
            src={myProfileGitHubUrl}
            onError={(e) => (e.target.src = myProfileImgUrl)}
            className="hero-img"
            alt="My Profile"
          ></img>
        </div>
      </ImageContainer>
    </Roll>
  );
};

export default MyImage;
