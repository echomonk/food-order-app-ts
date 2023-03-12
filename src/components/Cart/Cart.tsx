import React, { useContext } from "react";
import { Button, DialogActions, Stack, Typography } from "@mui/material";
import Modal from "../UI/Modal";
import CartContext, { CartItemProps } from "../../store/CartContext";
import CartItem from "./CartItem";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart = ({ onClose, isOpen }: CartProps) => {
  // Get cart context
  const { totalAmount, items, addOneItem, removeItem } =
    useContext(CartContext);

  // Check if cart has items
  const hasItems = items.length > 0;

  /**
   * Check if item has no amount
   * @param item
   * @returns boolean
   */
  const hasNoAmount = (amount: number) => {
    if (amount <= 0) {
      return true;
    }
    return false;
  };

  /**
   *  Remove item from cart
   * @param item
   */
  const handleRemoveItem = (item: CartItemProps) => {
    removeItem(item);
  };

  /**
   * Add one item to cart
   * @param item
   */
  const handleAddItem = (item: CartItemProps) => {
    addOneItem(item);
  };

  /**
   * Render cart items
   * @returns JSX.Element CartItems
   */
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
            itemHasNoAmount={hasNoAmount(item.amount)}
          />
        ))}
      </React.Fragment>
    );
  };

  return (
    <Modal onClose={onClose} open={isOpen}>
      <Stack
        direction={"column"}
        sx={{
          justifyContent: "space-between",
          alignItems: "inherit",
          width: "100%",
          maxHeight: 300,
          overflowY: "auto",
        }}
      >
        <CartItems />
      </Stack>

      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pt: 2,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 20,
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
          }}
        >
          {`$${totalAmount.toFixed(2)}`}
        </Typography>
      </Stack>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: 500,
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
              borderRadius: 20,
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
      </DialogActions>
    </Modal>
  );
};

export default Cart;
