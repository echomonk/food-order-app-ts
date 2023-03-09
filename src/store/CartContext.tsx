import React, { useReducer } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type CartState = {
  items: CartItem[];
  totalAmount: number;
};

type CartAction =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; id: string };

type CartContextProps = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

const initialCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === "ADD") {
    const itemsState = state.items.concat(action.item);
    const amountState =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: itemsState,
      totalAmount: amountState,
    };
  }
  if (action.type === "REMOVE") {
  }
  return initialCartState;
};

const CartContext = React.createContext<CartContextProps | null>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItem) => {},
  removeItem: (id: string) => {},
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

  const handleAddItem = (item: CartItem) => {
    dispatchCartState({ type: "ADD", item: item });
  };
  const handleRemoveItem = (id: string) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext: CartContextProps = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
