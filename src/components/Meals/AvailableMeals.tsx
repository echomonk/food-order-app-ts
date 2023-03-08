import { List, Stack } from "@mui/material";
import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

export type DummyMealsProps = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const DUMMY_MEALS: DummyMealsProps[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const availableMeals = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        width: "100%",
        maxWidth: "40rem",
        m: "2rem auto",
      }}
    >
      <Card>
        <List>{availableMeals}</List>
      </Card>
    </Stack>
  );
};

export default AvailableMeals;
