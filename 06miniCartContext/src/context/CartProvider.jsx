import React from 'react'
import {useState} from 'react';
import { CartContext } from './CartContext';

function CartProvider({children}) {
    const [cart , setCart] = useState([]);
    const addToCart = (product) =>{
        setCart((prevCart)=> [...prevCart , product]);
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id!==id));
    };
  return (
   <CartContext.Provider value = {{cart , addToCart , removeFromCart}}>
    {children}
   </CartContext.Provider>
  )
}

export default CartProvider
