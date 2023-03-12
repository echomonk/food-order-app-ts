import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { DummyMealsProps } from "../AvailableMeals";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

const MealItem = ({ id, name, description, price }: DummyMealsProps) => {
  // Get cart context
  const { addItem } = useContext(CartContext);

  // Format price
  const priceFormatted = `$ ${price.toFixed(2)}`;

  /**
   * Submit add item
   * @param amount
   * @returns void
   */
  const submitAddItem = (amount: number) => {
    addItem({ id, name, price, amount: amount });
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      <Stack
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: "1rem",
          pb: "1rem",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            m: "0 0 0.25rem 0",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: "0.25rem",
            fontWeight: "bold",
            color: "#ad5502",
            fontSize: "1.25rem",
          }}
        >
          {priceFormatted}
        </Typography>
      </Stack>
      <MealItemForm id={id} onAddItem={submitAddItem} />
    </Stack>
  );
};

export default MealItem;
