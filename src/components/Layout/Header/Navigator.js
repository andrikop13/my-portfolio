import { createRef, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Navigator = ({
  isHome,
  Resume,
  animeDelay,
  navMenu,
  transitionProps,
}) => {
  const resumeRef = useRef(null);

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
                  <Link to={nav.url}>{nav.name}</Link>
                </li>
              </CSSTransition>
            );
          })}

        {animeDelay && (
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
        )}
      </TransitionGroup>
    </div>
  );
};

export default Navigator;
