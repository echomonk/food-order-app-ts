import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalOverlay = ({ children, open, onClose }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "&. MuiPaper-root-MuiDialog-paper": {
          borderRadius: 30,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        Your Cart
      </DialogTitle>
      {children}
    </Dialog>
  );
};

const Modal = ({ onClose, children, open }: ModalProps) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay open={open} onClose={onClose}>
          {children}
        </ModalOverlay>,
        document.getElementById("modal")!
      )}
    </React.Fragment>
  );
};

export default Modal;
