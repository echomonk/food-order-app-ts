import { Box, Dialog } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const BackDrop = ({ onClose }: Pick<ModalProps, "onClose">) => {
  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 20,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      }}
    />
  );
};

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Dialog
        sx={{
          position: "fixed",
          top: "20vh",
          left: "5%",
          width: "90%",
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "14px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
          zIndex: 30,
          animation: "slide-down 300ms ease-out forwards",
          // @media
          "@media (min-width: 768px)": {
            left: "calc(50% - 20rem)",
            width: "40rem",
          },
          // @keyframes
          "@keyframes slide-down": {
            "0%": {
              opacity: 0,
              transform: "translateY(-3rem)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
        open={true}
      >
        {children}
      </Dialog>
    </React.Fragment>
  );
};

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={onClose} />,
        document.getElementById("overlays")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")!
      )}
    </React.Fragment>
  );
};

export default Modal;
