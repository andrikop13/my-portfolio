import { useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { responsive } from "../../../config/config";
import BurgerNavigator from "./BurgerNavigator";
import Navigator from "./Navigator";
import { navMenu } from "../../../config/config";

const Header = (props) => {
  const [isAnimeDelay, setAnimeDelay] = useState(!props.isHome);
  const [isMobile, setIsMobile] = useState(null);
  const burgerRef = useRef();

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

  const Logo = (
    <div className="logo" tabIndex="-1">
      {/* {props.isHome ? (
        <a href="/" aria-label="home">
          <MyLogo stroke={12} fontWeight={550} />
        </a>
      ) */}
      <a href="/" aria-label="home">
        <div className="flexRow">
          <div className="logoText">A</div>
          <div className="text-column">
            <div className="nameText">Andrikopoulos</div>
            <div className="jobTitle">Web Developer</div>
          </div>
        </div>
      </a>
    </div>
  );
  const Resume = (
    <a
      className="resume-button small-button"
      href="content/cv_andrikopoulos_andreas.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  const transProps = {
    in: props.isHome,
    classNames: "fadedown",
    timeout: (navMenu.length + 2) * 100,
  };

  return (
    <header>
      <nav>
        {Logo}

        {!isMobile ? (
          <Navigator
            isHome={props.isHome}
            Resume={Resume}
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
                  Resume={Resume}
                  navMenu={navMenu}
                  ref={burgerRef}
                  scroll={handleScrolling}
                />
              </CSSTransition>
            )}
          </TransitionGroup>
        )}
      </nav>
    </header>
  );
};

export default Header;
