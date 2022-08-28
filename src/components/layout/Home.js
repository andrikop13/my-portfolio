import { Fragment, useEffect, useState } from "react";
import { MyLogo } from "@assets";
import {
  Footer,
  Header,
  SideSocial,
  MessageWindow,
  HeaderAdmin,
} from "@components/layout";
import { Loader } from "@components/loader";

const Home = (props) => {
  const isHome = props.location.pathname === "/";
  const isAdmin = props.location.pathname.includes("/admin");
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
      });
    }
  }, [isLoading, props.location]);

  return (
    <Fragment>
      {isLoading && <MyLogo />}

      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          {!isAdmin && <Header isHome={isHome} />}
          {isAdmin && <HeaderAdmin />}
          <SideSocial flexRow={false} />
          {props.children}
          <Footer />

          <MessageWindow />
        </>
      )}
    </Fragment>
  );
};

export default Home;
