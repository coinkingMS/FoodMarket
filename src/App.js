import React,{ useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
const App = () => {
  const [showCart, setshowCart] = useState(false)
  
  const showCartHandler = () => {
    setshowCart(true)
  }

  const hideCartHandler = () => {
    setshowCart(false)
  }

  return (
    <div>
      <CartProvider>
        {showCart && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
};

export default App;
