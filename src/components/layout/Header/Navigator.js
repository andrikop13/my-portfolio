import { createRef, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Navigator = ({
  isHome,
  Resume,
  Login,
  animeDelay,
  navMenu,
  transitionProps,
  scroll,
}) => {
  const resumeRef = useRef(null);
  const loginRef = useRef(null);

  return (
    <div className="nav--links">
      <TransitionGroup component="ol">
        {animeDelay &&
          navMenu &&
          navMenu.map((nav, index) => {
            const nodeRef = createRef(null);

            return (
              <CSSTransition
                nodeRef={nodeRef}
                {...transitionProps}
                key={index}
                style={{
                  transitionDelay: `${isHome ? index * 100 : 0}ms`,
                }}
              >
                <li ref={nodeRef} key={index}>
                  <Link
                    to={nav.url}
                    onClick={scroll.bind(this, nav.url.replace("/#", ""))}
                  >
                    {nav.name}
                  </Link>
                </li>
              </CSSTransition>
            );
          })}

        {animeDelay && (
          <>
            <CSSTransition
              nodeRef={resumeRef}
              {...transitionProps}
              timeout={transitionProps.timeout + 100}
              style={{
                transitionDelay: `${isHome ? navMenu.length * 100 : 0}ms`,
              }}
            >
              <div ref={resumeRef}>{Resume}</div>
            </CSSTransition>

            <CSSTransition
              nodeRef={loginRef}
              {...transitionProps}
              timeout={transitionProps.timeout + 300}
              style={{
                transitionDelay: `${isHome ? navMenu.length * 150 : 0}ms`,
              }}
            >
              <div ref={loginRef}>{Login}</div>
            </CSSTransition>
          </>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Navigator;
