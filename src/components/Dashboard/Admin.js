import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URL_CONFIG } from "../../config/config";
import AuthContext from "../../store/auth-context";

const Admin = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoggedIn } = authCtx;

  useEffect(() => {
    isLoggedIn && navigate(URL_CONFIG.baseURLs.dashboard);
    !isLoggedIn && navigate(URL_CONFIG.baseURLs.login);
  }, [isLoggedIn, navigate]);
  return <></>;
};

export default Admin;
