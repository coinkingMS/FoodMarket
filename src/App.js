import React,{ useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
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
      <React.Fragment>
        <Header onShowCart={showCartHandler}/>
        {showCart && <Cart onClose={hideCartHandler}/>}
        <main>
          <Meals />
        </main>
      </React.Fragment>
    </div>
  );
};

export default App;
