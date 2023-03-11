import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import mealsImage from "../../assets/meals.jpg";
import CartContext from "../../store/CartContext";
import HeaderCartButton from "./HeaderCartButton";

type HeaderProps = {
  onShowCart: () => void;
};
const Header = ({ onShowCart }: HeaderProps) => {
  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "5rem",
          backgroundColor: "#8a2b06",
          color: "white",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          padding: "0 10%",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
          zIndex: 10,
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Typography variant="h4">ReactMeals</Typography>
          </Grid>
          <Grid item sm={6} md={6} lg={4}>
            <HeaderCartButton
              buttonText="Your Cart"
              badge={numberOfItems}
              onClick={onShowCart}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "25rem",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          width="110%"
          height="100%"
          style={{
            objectFit: "cover",
            transform: "rotateZ(-5deg) translateY(-4rem) translateX(-1rem)",
          }}
          src={mealsImage}
          alt={"A Table Full of Delicious Food"}
        />
      </Box>
    </React.Fragment>
  );
};

export default Header;
