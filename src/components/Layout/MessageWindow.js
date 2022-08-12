import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui/ui-slice";
import React from "react";
import { Snackbar, Alert } from "@mui/material";

const MessageWindow = () => {
  const message = useSelector((state) => state.ui.message);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiActions.resetMessage());
  };

  return (
    <Snackbar
      open={message.showMessage}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={message.severity}
        sx={{ fontSize: "var(--fonts-xxs)", color: "var(--white)" }}
        variant="filled"
      >
        {message.text}
      </Alert>
    </Snackbar>
  );
};

export default MessageWindow;
