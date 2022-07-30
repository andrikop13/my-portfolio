import { Fragment, useEffect, useState } from "react";
import MyLogo from "../../assets/icons/MyLogo";
import Loader from "../Loader/Loader";
import Footer from "./Footer";
import Header from "./Header";

const Home = (props) => {
  const isHome = props.location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (props.location.hash) {
      const id = props.location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading, props.location.hash]);

  return (
    <Fragment>
      {isLoading && <MyLogo />}
      <div id="root">
        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Header isHome={isHome} />
            {props.children}
            <Footer />
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
