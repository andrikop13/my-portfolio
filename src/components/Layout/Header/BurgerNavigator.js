import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navMenu } from "../../../config/config";

const StyledMenu = styled.aside`
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  padding: 5rem 1rem;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0px;
  background-color: var(--light-navy);
  box-shadow: -10px 0px 30px -15px var(--navy-shadow);
  z-index: 9;
  transform: ${({ open }) => (open ? "translateX(3%)" : "translateX(103%)")};
  visibility: visible;
  transition: var(--transition);

  ol {
    padding: 0;
    margin: 0;
    text-align: center;
    list-style: none;
    width: 100%;

    li {
      counter-increment: item 1;
      font-size: var(--fonts-lg);
      margin-bottom: 3rem;

      &:before {
        content: "0" counter(item) ".";
        display: block;
        margin-bottom: -0.5rem;
        color: var(--green);
        font-size: var(--fonts-sm);
      }

      & a {
        padding: 0.5rem;
        margin-right: 1rem;
        color: var(--lightest-slate);

        &:hover,
        &:focus {
          color: var(--green);
        }
      }
    }

    .resume-button {
      font-size: var(--fonts-md);
      padding: 2rem 4rem;
    }
  }
`;

const StyledBurger = styled.button`
  position: relative;
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.25rem;
    background: var(--green);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const BurgerNavigator = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <StyledBurger ref={ref} open={open} onClick={() => setOpen(!open)}>
        {[1, 2, 3].map(() => (
          <div></div>
        ))}
      </StyledBurger>
      <StyledMenu open={open}>
        <ol>
          {navMenu &&
            navMenu.map((item, index) => (
              <li key={index}>
                <Link to={item.url} onClick={() => setOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          <div className="resume-button">{props.Resume}</div>
        </ol>
      </StyledMenu>
    </div>
  );
});

export default BurgerNavigator;
