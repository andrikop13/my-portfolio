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
          {isAuthenticated && (
            <Link
              to={URL_CONFIG.baseURLs.dashboard}
              replace
              className="resume-button small-button"
            >
              Dashboard
            </Link>
          )}
          <a href="/" replace className="resume-button small-button">
            Portfolio
          </a>
          {isAuthenticated && (
            <Link
              to={URL_CONFIG.baseURLs.login}
              replace
              className="login-button-main small-button"
              style={{ marginLeft: "15px" }}
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
