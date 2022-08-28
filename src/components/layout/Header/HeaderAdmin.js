import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL_CONFIG } from "@config";
import { AuthContext } from "@store";
import { Logo } from "@components/layout";

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
      <nav className="nav-admin">
        <Logo />

        <div className="nav--links">
          {isAuthenticated && (
            <Link
              to={URL_CONFIG.baseURLs.dashboard}
              replace
              className="resume-button small-button"
              style={{ marginLeft: "0.5rem", marginRight: "0rem" }}
            >
              Menu
            </Link>
          )}
          <a
            href="/"
            className="resume-button small-button"
            style={{ marginLeft: "0.5rem", marginRight: "0rem" }}
          >
            Portfolio
          </a>
          {isAuthenticated && (
            <Link
              to={URL_CONFIG.baseURLs.login}
              replace
              className="login-button-main small-button"
              style={{ marginLeft: "0.5rem", marginRight: "0rem" }}
              onClick={logoutHandler}
            >
              Logout
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
