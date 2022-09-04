import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginForm, Wrapper } from "@components/dashboard";
import { emailRegex, passwordRegex, URL_CONFIG } from "@config";
import { useInput, useHttp } from "@hooks";
import { useContext, useEffect } from "react";
import { AuthContext, uiActions } from "@store";

const isEmail = (value) => String(value).toLowerCase().match(emailRegex());
const isPassword = (value) => passwordRegex().test(value);

const Login = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, sendRequest: login } = useHttp();

  const { isLoggedIn } = authCtx;

  useEffect(() => {
    isLoggedIn && navigate("/admin/dashboard");
  }, [isLoggedIn, navigate]);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
  } = useInput(isPassword);

  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
  } = useInput(isEmail);

  let formIsValid = false;

  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  const saveToken = (data) => {
    dispatch(
      uiActions.showMessage({
        message: "Login success",
        status: "success",
      })
    );
    authCtx.login(data.token, data.expires);
    navigate(URL_CONFIG.baseURLs.dashboard);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(
      uiActions.showMessage({
        message: "Login request...",
        status: "info",
      })
    );

    login(
      {
        url: `${process.env.REACT_APP_BACKEND_URL}/${URL_CONFIG.users.login}`,
        method: "POST",
        body: {
          email: emailValue,
          password: passwordValue,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      saveToken,
      {
        message: "Login success",
        status: "success",
      }
    );
  };

  if (error) {
    dispatch(
      uiActions.showMessage({
        message: "Login failed...",
        status: "error",
      })
    );
  }

  return (
    <Wrapper>
      <LoginForm
        email={emailValue}
        password={passwordValue}
        emailValid={emailIsValid}
        passwordValid={passwordIsValid}
        formValid={formIsValid}
        passChange={passwordChangeHandler}
        emailChange={emailChangeHandler}
        submitLoginForm={submitLogin}
      />
    </Wrapper>
  );
};

export default Login;
