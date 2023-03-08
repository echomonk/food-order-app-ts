import React from "react";
import { Box, Button, List, Paper, Stack, Typography } from "@mui/material";
import Modal from "../UI/Modal";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart = ({ onClose, isOpen }: CartProps) => {
  const cartItems = (
    <List
      sx={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        maxHeight: "20rem",
        overflow: "auto",
      }}
    >
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </List>
  );

  return (
    <Modal onClose={onClose} open={isOpen}>
      <Paper
        sx={{
          width: 400,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            width: "100%",
            height: "100%",
          }}
        >
          <Box>{cartItems}</Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
              margin: "1rem 0",
            }}
          >
            Total Amount
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
              margin: "1rem 0",
            }}
          >
            15.62
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontWeight: "bold",
            width: "100%",
            height: "100%",
            my: 1,
          }}
        >
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              font: "inherit",
              cursor: "pointer",
              backgroundColor: "#8a2b06",
              border: "1px solid #8a2b06",
              color: "white",
              p: "0.25rem 2rem",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#ad5502",
                border: "1px solid #ad5502",
              },
              active: {
                backgroundColor: "#641e03",
                borderColor: "#641e03",
              },
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            sx={{
              font: "inherit",
              cursor: "pointer",
              backgroundColor: "#8a2b06",
              border: "1px solid #8a2b06",
              color: "white",
              p: "0.25rem 2rem",
              borderRadius: "20px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#ad5502",
                border: "1px solid #ad5502",
              },
              active: {
                backgroundColor: "#641e03",
                borderColor: "#641e03",
              },
            }}
          >
            Order
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default Cart;
