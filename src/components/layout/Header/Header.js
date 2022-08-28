import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { responsive, navMenu } from "@config";
import { useScrollDirection } from "@hooks";
import {
  BurgerNavigator,
  Navigator,
  Logo,
  Resume,
  LoginButton,
} from "@components/layout";
import { useWindowSize } from "@hooks";

const HeaderShow = styled.header`
  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      transform: translateY(0px);
      box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.1);
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      transform: translateY(calc(2 * var(--nav-scroll-height) * -1));
      background-color: transparent;
    `};
`;

const Header = (props) => {
  const [isAnimeDelay, setAnimeDelay] = useState(!props.isHome);
  const burgerRef = useRef();
  const { scrollDirection, scrolledToTop } = useScrollDirection();
  const { isMobile } = useWindowSize(responsive.tablet[1]);

  const handleScrolling = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimeDelay(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const transProps = {
    in: props.isHome,
    classNames: "fadedown",
    timeout: (navMenu.length + 2) * 100,
  };

  return (
    <HeaderShow scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <nav>
        <Logo />

        {!isMobile ? (
          <Navigator
            isHome={props.isHome}
            Resume={<Resume />}
            Login={<LoginButton />}
            Logo={Logo}
            animeDelay={isAnimeDelay}
            navMenu={navMenu}
            transitionProps={transProps}
            scroll={handleScrolling}
          />
        ) : (
          <TransitionGroup component={null}>
            {isAnimeDelay && (
              <CSSTransition nodeRef={burgerRef} {...transProps}>
                <BurgerNavigator
                  Resume={<Resume />}
                  Login={<LoginButton />}
                  navMenu={navMenu}
                  ref={burgerRef}
                  scroll={handleScrolling}
                />
              </CSSTransition>
            )}
          </TransitionGroup>
        )}
      </nav>
    </HeaderShow>
  );
};

export default Header;
