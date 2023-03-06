import React from "react";
import { Button, List, Stack, Typography } from "@mui/material";
import Modal from "../UI/Modal";

type CartProps = {
  onClose: () => void;
};

const Cart = ({ onClose }: CartProps) => {
  const cartItems = (
    <List
      sx={{
        listStyle: "none",
        m: 0,
        p: 0,
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
    <Modal onClose={onClose}>
      {cartItems}
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          m: "1rem 0",
        }}
      >
        <Typography>Total Amount</Typography>
        <Typography>15.62</Typography>
      </Stack>
      <Stack direction={"row"}>
        <Button onClick={onClose}>Close</Button>
        <Button>Order</Button>
      </Stack>
    </Modal>
  );
};

export default Cart;
