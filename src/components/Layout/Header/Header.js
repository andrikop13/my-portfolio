import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { responsive } from "../../../config/config";
import BurgerNavigator from "./BurgerNavigator";
import Navigator from "./Navigator";
import { navMenu } from "../../../config/config";
import styled, { css } from "styled-components";
import { useScrollDirection } from "../../../hooks/use-scroll_direction";
import Logo from "./Logo";
import Resume from "./Resume";

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
  const [isMobile, setIsMobile] = useState(null);
  const burgerRef = useRef();
  const { scrollDirection, scrolledToTop } = useScrollDirection();

  const handleResize = () => {
    const w = window.innerWidth / responsive.baseDivider;
    setIsMobile(w < responsive.tablet[1]);
  };

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

    const width = window.innerWidth / responsive.baseDivider;
    setIsMobile(width < responsive.tablet[1]);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
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
