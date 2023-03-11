import React, { useReducer } from "react";

export type CartItemProps = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type CartState = {
  items: CartItemProps[];
  totalAmount: number;
};

type CartAction =
  | { type: "ADD"; item: CartItemProps }
  | { type: "ADD_ONE_ITEM"; item: CartItemProps }
  | { type: "REMOVE"; item: CartItemProps };

type CartContextProps = {
  items: CartItemProps[];
  totalAmount: number;
  addItem: (item: CartItemProps) => void;
  addOneItem: (item: CartItemProps) => void;
  removeItem: (item: CartItemProps) => void;
};

const initialCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction) => {
  if (action.type === "ADD") {
    // Updating amount state
    const amountState =
      state.totalAmount + action.item.amount * action.item.price;

    // Finding the index of the item
    const existingItemCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemCartIndex];

    // Checks if the item is already in the array and then...
    //...updating the amount of the specific item.
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      // If not adds the updated item to the updated items array.
      updatedItems = [...state.items];
      updatedItems[existingItemCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: amountState,
    };
  }

  if (action.type === "ADD_ONE_ITEM") {
    // Updating amount state
    const amountState = state.totalAmount + action.item.price;

    // Finding the index of the item
    const existingItemCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemCartIndex];

    // Increasing amount of the specific item by 1.
    let updatedItems;
    const updatedItem = {
      ...existingItem,
      amount: existingItem.amount + 1,
    };

    // Add into new array of items.
    updatedItems = [...state.items];
    updatedItems[existingItemCartIndex] = updatedItem;

    return {
      items: updatedItems,
      totalAmount: amountState,
    };
  }

  if (action.type === "REMOVE") {
    // Updating amount state
    const amountState = state.totalAmount - action.item.price;

    // Finding the index of the item
    const existingItemCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemCartIndex];

    // Decreasing amount of the specific item by 1.
    const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

    let updatedItems;
    updatedItems = [...state.items];
    updatedItems[existingItemCartIndex] = updatedItem;

    return {
      items: updatedItems,
      totalAmount: amountState,
    };
  }
  return initialCartState;
};

const CartContext = React.createContext<CartContextProps>({
  items: [],
  totalAmount: 4,
  addItem: (item: CartItemProps) => {},
  addOneItem: (item: CartItemProps) => {},
  removeItem: (item: CartItemProps) => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    initialCartState
  );

  const handleAddItem = (item: CartItemProps) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const handleAddOneItem = (item: CartItemProps) => {
    dispatchCartState({ type: "ADD_ONE_ITEM", item: item });
  };

  const handleRemoveItem = (item: CartItemProps) => {
    dispatchCartState({ type: "REMOVE", item: item });
  };

  const cartContext: CartContextProps = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItem,
    addOneItem: handleAddOneItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
