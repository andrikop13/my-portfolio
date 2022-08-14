import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL_CONFIG } from "../../../config/config";
import AuthContext from "../../../store/auth-context";
import Logo from "./Logo";

const HeaderAdmin = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    navigate(URL_CONFIG.baseURLs.login);
  };

  return (
    <header>
      <nav>
        <Logo />

        <div className="nav--links">
          {isAuthenticated ? (
            <Link
              to={URL_CONFIG.baseURLs.login}
              replace
              className="resume-button small-button"
              onClick={logoutHandler}
            >
              Logout
            </Link>
          ) : (
            <Link
              to={URL_CONFIG.baseURLs.login}
              replace
              className="resume-button small-button"
            >
              Login
            </Link>
          )}

          <Link to={"/"} replace className="resume-button small-button">
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
