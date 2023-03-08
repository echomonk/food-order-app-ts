import React from "react";
import { Box, Button, List, Paper, Stack, Typography } from "@mui/material";
import Modal from "../UI/Modal";

type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

const Cart = ({ onClose, isOpen }: CartProps) => {
  const cartItems = (
    <List
      sx={{
        listStyle: "none",
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
          <Typography>Total Amount</Typography>
          <Typography>15.62</Typography>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            width: "100%",
            height: "100%",
          }}
        >
          <Button onClick={onClose}>Close</Button>
          <Button>Order</Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default Cart;
