import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/**
 *  Modal Overlay Component
 * @param children
 * @returns JSX.Element
 */
const ModalOverlay = ({ children, open, onClose }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 5,
          maxWidth: 600,
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
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "inherit",
          justifyContent: "space-between",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

/**
 * Modal Component
 * @param children
 * @returns JSX.Element
 */
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
