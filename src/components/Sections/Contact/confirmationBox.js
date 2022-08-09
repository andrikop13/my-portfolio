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
  fontSize: "var(--fonts-xs)",
  padding: "0 0 1rem 0",
};

const agreeButton = {
  backgroundColor: "var(--lightest-green)",
  border: "1px solid var(--light-green)",
  paddingRight: "1.5rem",
  paddingLeft: "1.5rem",
  color: "var(--white) !important",
  "&:hover": {
    backgroundColor: "var(--light-green) !important",
  },
};

const disagreeButton = {
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

export default function ConfirmationBox({ open, setOpen, confirm }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
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
          {"Sending email..."}
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
            Are you sure you want to contact with me ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={disagreeButton}>
            No
          </Button>
          <Button onClick={handleAgree} autoFocus sx={agreeButton}>
            Let's talk!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
