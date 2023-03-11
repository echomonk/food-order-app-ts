import React, { useContext } from "react";
import { Button, Stack, Typography } from "@mui/material";
import Modal from "../UI/Modal";
import CartContext, { CartItemProps } from "../../store/CartContext";
import CartItem from "./CartItem";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart = ({ onClose, isOpen }: CartProps) => {
  const { totalAmount, items, addOneItem, removeItem } =
    useContext(CartContext);

  const hasItems = items.length > 0;

  const hasNoAmount = (item: CartItemProps) => {
    if (item.amount <= 0) {
      return true;
    }
    return false;
  };

  const handleRemoveItem = (item: CartItemProps) => {
    removeItem(item);
  };

  const handleAddItem = (item: CartItemProps) => {
    addOneItem(item);
  };

  const CartItems = () => {
    return (
      <React.Fragment>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={handleRemoveItem.bind(null, item)}
            onAdd={handleAddItem.bind(null, item)}
            itemHasNoAmount={hasNoAmount(item)}
          />
        ))}
      </React.Fragment>
    );
  };

  return (
    <Modal onClose={onClose} open={isOpen}>
      <Stack
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          fontWeight: "bold",
          width: "100%",
          height: "100%",
          pl: 2,
        }}
      >
        <CartItems />
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          px: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 20,
            margin: "1rem 0",
          }}
        >
          Total Amount:
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 20,
            margin: "1rem 0",
          }}
        >
          {`$${totalAmount.toFixed(2)}`}
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          fontWeight: "bold",
          width: "100%",
          height: "100%",
          px: 2,
          my: 1,
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            font: "inherit",
            border: "1px solid #8a2b06",
            color: "#8a2b06",
            p: 0.5,
            px: 4,
            borderRadius: 20,
            fontWeight: "bold",
            boxShadow: 5,
            "&:hover": {
              backgroundColor: "#ad5502",
              border: "1px solid #ad5502",
              color: "white",
            },
          }}
        >
          Close
        </Button>
        {hasItems && (
          <Button
            variant="contained"
            sx={{
              font: "inherit",
              backgroundColor: "#8a2b06",
              border: "1px solid #8a2b06",
              color: "white",
              p: "0.25rem 2rem",
              borderRadius: "20px",
              fontWeight: "bold",
              boxShadow: 5,
              "&:hover": {
                backgroundColor: "#ad5502",
                border: "1px solid #ad5502",
              },
            }}
          >
            Order
          </Button>
        )}
      </Stack>
    </Modal>
  );
};

export default Cart;
