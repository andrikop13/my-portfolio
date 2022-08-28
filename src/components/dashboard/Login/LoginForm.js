import { useState } from "react";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { MyLogo } from "@assets";

const LoginForm = ({
  email,
  password,
  emailValid,
  passwordValid,
  formValid,
  passChange,
  emailChange,
  submitLoginForm,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const textStyle = {
    style: {
      fontSize: "var(--fonts-xs)",
      padding: "1.25rem 2rem",
    },
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="login-container"
      onSubmit={submitLoginForm}
      style={{ marginTop: "-7rem" }}
    >
      <div className="login-sidebar">
        <div className="login-sidebar__flex">
          <div style={{ width: "10rem", height: "10rem" }}>
            <MyLogo />
          </div>

          <div className="description">
            This is my portfolio's admin page. Please login to continue.
          </div>
        </div>
      </div>

      <div className="main-form">
        <div className="main-form__title">Login into your account.</div>
        <Grid
          className="main-form__input"
          container
          spacing={5}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <FormControl variant="outlined" required error={!emailValid}>
              <InputLabel htmlFor="outlined-adornment-password">
                Email
              </InputLabel>
              <OutlinedInput
                value={email}
                inputProps={textStyle}
                onChange={emailChange}
                label="Email"
                error={!emailValid}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton></IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl variant="outlined" required error={!passwordValid}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                inputProps={textStyle}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={passChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>

          <Grid item>
            <button
              className="login-button"
              disabled={!formValid}
              type="submit"
            >
              Continue &rarr;
            </button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default LoginForm;
