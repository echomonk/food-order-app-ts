import React from "react";
import { ButtonBase, keyframes, Stack, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

type HeaderCartButtonProps = {
  buttonText: string;
  badge: number;
  onClick: () => void;
  isButtonHighlighted: boolean;
};

const HeaderCartButton = ({
  buttonText: text,
  badge,
  onClick,
  isButtonHighlighted,
}: HeaderCartButtonProps) => {
  // Button Base animation on add item to cart
  const bump = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  `;

  // Styled Button
  const StyledButton = styled(ButtonBase)({
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
    animation: `${isButtonHighlighted ? bump : ""} 0.3s ease-in-out}`,
  });

  return (
    <StyledButton onClick={onClick}>
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
    </StyledButton>
  );
};

export default HeaderCartButton;
