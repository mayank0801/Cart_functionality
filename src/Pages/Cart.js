import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, RemoveToCartHandler } = useContext(CartContext);
  // console.log(cart);
  return (
    <>
      <h3>Total Quantity:{cart.length || 0}</h3>
      <h4>
        Total Price:
        {cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0)}
      </h4>
      {cart.map(({ id, name, quantity, price }) => (
        <div key={id} style={{ border: "1px solid black", padding: "1rem" }}>
          <h3>{name}</h3>
          <p>
            <strong>Quantity:</strong>
            {quantity}
          </p>
          <p>
            <strong>Price(1 qty):</strong>
            {price}
          </p>
          <button onClick={() => RemoveToCartHandler(id)}>
            Remove From Cart
          </button>
        </div>
      ))}
    </>
  );
}
