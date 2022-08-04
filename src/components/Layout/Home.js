import { Fragment, useEffect, useState } from "react";
import MyLogo from "../../assets/icons/MyLogo";
import Loader from "../Loader/Loader";
import Footer from "./Footer";
import Header from "./Header/Header";

const Home = (props) => {
  const isHome = props.location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    // Check on refresh if /#<page> exists on URL
    if (props.location.hash) {
      const id = props.location.hash.substring(1);

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            top: 0,
            behavior: "smooth",
          });
          el.focus();
        }
      }, 1000);
    }
  }, [isLoading, props.location]);

  return (
    <Fragment>
      {isLoading && <MyLogo />}

      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Header isHome={isHome} />
          {props.children}
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Home;
