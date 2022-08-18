import { useContext } from "react";
import { Link } from "react-router-dom";
import { URL_CONFIG } from "../../../config/config";
import AuthContext from "../../../store/auth-context";

const LoginButton = () => {
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isLoggedIn;

  return (
    <>
      {!isAuthenticated ? (
        <Link
          to={URL_CONFIG.baseURLs.login}
          replace
          className="login-button-main small-button"
        >
          Login
        </Link>
      ) : (
        <Link
          to={URL_CONFIG.baseURLs.dashboard}
          replace
          className=" login-button-main small-button"
        >
          Menu
        </Link>
      )}
    </>
  );
};

export default LoginButton;
