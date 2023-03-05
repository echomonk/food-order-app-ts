import React from "react";
import { ButtonBase, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type HeaderCartButtonProps = {
  buttonText: string;
  badge: number;
  onClick: () => void;
};

const HeaderCartButton = ({
  buttonText: text,
  badge,
  onClick,
}: HeaderCartButtonProps) => {
  return (
    <ButtonBase sx={ButtonBaseSx} onClick={onClick}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <ShoppingCartIcon />
        <Typography variant="h6">{text}</Typography>
        <Typography variant="h6" className="badge">
          {badge}
        </Typography>
      </Stack>
    </ButtonBase>
  );
};

export default HeaderCartButton;

// Button Base Styles
const ButtonBaseSx = {
  cursor: "pointer",
  font: "inherit",
  border: "none",
  backgroundColor: "#4d1601",
  color: "white",
  padding: "0.75rem 3rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "25px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#2c0d00",
  },
  "&:active": {
    backgroundColor: "#2c0d00",
  },
  "& .icon": {
    width: "1.35rem",
    height: "1.35rem",
    marginRight: "0.5rem",
  },
  "& .badge": {
    backgroundColor: "#b94517",
    padding: "0.25rem 1rem",
    borderRadius: "25px",
    marginLeft: "1rem",
    fontWeight: "bold",
  },
  "&:hover .badge": {
    backgroundColor: "#92320c",
  },
  "&:active .badge": {
    backgroundColor: "#92320c",
  },
  "& .bump": {
    animation: "bump 300ms ease-out",
  },
  "@keyframes bump": {
    "0%": {
      transform: "scale(1)",
    },
    "10%": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
};
