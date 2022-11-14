import Header from './Components/Layout/Header';
import React, { useState} from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

// this is a comment

//the code nee to be add on tha dev branch
function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler =() =>{
    setCartIsShown(true);
  }
  const hideCartHandler =() =>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/> }
        <Header onShowCart={showCartHandler}/>
        <main>
           <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
