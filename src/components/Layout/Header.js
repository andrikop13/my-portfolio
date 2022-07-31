import { createRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MyLogo from "../../assets/icons/MyLogo";
import { navMenu } from "../../config/config";

const Header = (props) => {
  const [isHomeAnimeDelay, setIsHomeAnimeDelay] = useState(!props.isHome);
  const resumeRef = useRef(null);

  useEffect(() => {
    // This is the workaroun for CSSTransition to work properly. Otherwise, not working on refresh
    const timeout = setTimeout(() => {
      setIsHomeAnimeDelay(true);
    }, 100);

    // Clean up function to clean timeout
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const Logo = (
    <div className="logo" tabIndex="-1">
      {props.isHome ? (
        <a href="/" aria-label="home">
          <MyLogo stroke={12} fontWeight={550} />
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <MyLogo stroke={8} />
        </Link>
      )}
    </div>
  );

  const Resume = (
    <a
      className="resume-button small-button"
      href="/resume.pdf"
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

        <div className="nav--links">
          <TransitionGroup component="ol">
            {isHomeAnimeDelay &&
              navMenu &&
              navMenu.map((nav, index) => {
                const nodeRef = createRef(null);

                return (
                  <CSSTransition
                    nodeRef={nodeRef}
                    {...transProps}
                    key={index}
                    style={{
                      transitionDelay: `${props.isHome ? index * 100 : 0}ms`,
                    }}
                  >
                    <li ref={nodeRef} key={index}>
                      <Link to={nav.url}>{nav.name}</Link>
                    </li>
                  </CSSTransition>
                );
              })}

            {isHomeAnimeDelay && (
              <CSSTransition
                nodeRef={resumeRef}
                {...transProps}
                timeout={transProps.timeout + 100}
                style={{
                  transitionDelay: `${
                    props.isHome ? navMenu.length * 100 : 0
                  }ms`,
                }}
              >
                <div ref={resumeRef}>{Resume}</div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </nav>
    </header>
  );
};

export default Header;
