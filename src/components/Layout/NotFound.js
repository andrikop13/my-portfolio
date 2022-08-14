import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="not-found">
        <div className="not-found__textContainer">
          <div className="not-found__status">404</div>
          <div className="not-found__comment">Page not found</div>
          <div className="not-found__description">
            It looks like you are lost! <br /> The page you were looking for
            doesn't exist.
          </div>
          <br /> <br /> <br /> <br />
          <div className="form-button not-found__button" onClick={goHome}>
            Go home
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
