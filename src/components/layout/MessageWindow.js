import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { uiActions } from "@store";

const MessageWindow = () => {
  const message = useSelector((state) => state.ui.message);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiActions.resetMessage());
  };

  return (
    <Snackbar
      open={message.showMessage}
      autoHideDuration={10000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={message.severity !== "" ? message.severity : "error"}
        sx={{ fontSize: "var(--fonts-xxs)", color: "var(--white)" }}
        variant="filled"
      >
        {message.text}
      </Alert>
    </Snackbar>
  );
};

export default MessageWindow;
