import { Paper } from "@mui/material";
import React from "react";

/**
 * Card Component
 * @param children
 * @returns JSX.Element
 */
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paper
      sx={{
        p: "1rem",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        borderRadius: "14px",
        backgroundColor: "white",
      }}
    >
      {children}
    </Paper>
  );
};

export default Card;
