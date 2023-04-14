import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export { CartContext };

export default function CartProvider({ children }) {
  const [cart, SetCart] = useState([]);
  function AddToCartHandler(item) {
    const productCart = cart.find(({ id }) => id === item.id);
    console.log(productCart, "productcartfind");
    if (productCart) {
      SetCart((cart) =>
        cart.map((cartitem) => ({
          ...cartitem,
          quantity: cartitem.quantity + item.quantity
        }))
      );
    } else {
      SetCart([...cart, item]);
    }

    // SetCart([...cart, item]);
  }

  function RemoveToCartHandler(idtodelete) {
    SetCart((cart) => cart.filter(({ id }) => id !== idtodelete));
  }

  return (
    <>
      <CartContext.Provider
        value={{ cart, AddToCartHandler, RemoveToCartHandler }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
