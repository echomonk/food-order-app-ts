import { Paper, Typography } from "@mui/material";
import React from "react";

const MealsSummary = () => {
  return (
    <Paper
      sx={{
        textAlign: "center",
        maxWidth: "45rem",
        width: "90%",
        margin: "auto",
        mt: "-10rem",
        position: "relative",
        backgroundColor: "#ad7e74",
        color: "white",
        borderRadius: "14px",
        padding: "1rem",
        boxShadow: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "2rem",
          mt: 0,
        }}
      >
        Delicious Food, Delivered To You
      </Typography>
      <Typography variant="body1">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Typography>
      <Typography variant="body1">
        All our meals are cooked with high-quality ingredients, just-in- time
        and of course by experienced chefs!
      </Typography>
    </Paper>
  );
};

export default MealsSummary;
