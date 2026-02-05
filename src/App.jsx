import NavBar from "./Components/Layout/NavBar";
import Shoes from "./Components/Shoes/Shoes";
import CartProvider from "./Context/CartProvider";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import Background from "./Components/Shoes/Background";

function App() {

    const [cartShown, setcartShown]=useState(false);

    const showCartHandler=()=>{
      setcartShown(true);
    }

    const hideCartHandler=()=>{
      setcartShown(false);
    }

  return (
  
    <CartProvider>  
    {cartShown && <Cart onClose={hideCartHandler} />}
    <NavBar onShowCart={showCartHandler} />
       <main>
        <Shoes />
       </main>
    </CartProvider>
  )
}

export default App
