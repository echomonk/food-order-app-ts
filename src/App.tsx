import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
// import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  return (
    <CartContextProvider>
      {isCartVisible && (
        <Cart onClose={hideCartHandler} isOpen={isCartVisible} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
