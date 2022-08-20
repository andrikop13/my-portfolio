import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Slide } from "@mui/material";

const titleStyling = {
  fontSize: "var(--fonts-sm)",
  fontWeight: "bold",
  color: "var(--dark-navy)",
  maxWidth: 600,
  paddingTop: "0.5rem",
  paddingBottom: "1rem",
};

const typographyStyling = {
  fontWeight: "bold",
  fontSize: "var(--fonts-sm)",
  padding: "0 0 1rem 0",
};

const agreeButton = {
  backgroundColor: "var(--green)",
  border: "1px solid var(--grey)",
  paddingRight: "1.5rem",
  fontWeight: 550,
  paddingLeft: "1.5rem",
  color: "var(--dark-navy) !important",
  "&:hover": {
    backgroundColor: "var(--dark-green) !important",
  },
};

const disagreeButton = {
  fontWeight: 550,
  backgroundColor: "transparent",
  border: "1px solid var(--grey)",
  color: "var(--grey) !important",
  "&:hover": {
    color: "var(--white) !important",
    backgroundColor: "var(--grey) !important",
  },
};

const boxStyling = {
  backgroundColor: "var(--lightest-slate)",
  boxShadow: "2rem 4rem 8rem rgba(0, 0, 0, 0.4)",
  color: "var(--dark-navy)",
  padding: "1rem",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmationBox({
  dialog,
  open,
  setOpen,
  confirm,
  dialogTitle,
  confirmationMessage,
  yesMessage,
}) {
  const handleClose = () => {
    dialog && setOpen({ ...dialog, open: dialog.open });
    setOpen(false);
  };

  const handleAgree = () => {
    dialog && setOpen({ ...dialog, open: dialog.open });
    setOpen(false);
    confirm();
  };

  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        PaperProps={{
          sx: boxStyling,
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ ...titleStyling }}>
          {dialogTitle}
        </DialogTitle>
        <hr />
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              ...typographyStyling,
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            {confirmationMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={disagreeButton}>
            No
          </Button>
          <Button onClick={handleAgree} autoFocus sx={agreeButton}>
            {yesMessage}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
