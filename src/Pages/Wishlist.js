import { useContext } from "react";
import { WishlistContext } from "../context/WishListContext";

export default function Wishlist() {
  const { wishlistItems, RemoveWishlistHandler } = useContext(WishlistContext);
  console.log("WishlistItem", wishlistItems || "not present");

  return (
    <div>
      <h3>Wishlist Qunatity:{wishlistItems.length}</h3>
      {wishlistItems.map(({ id, name, price, quantity }) => (
        <div
          key={id}
          style={{
            border: "1px solid black",
            margin: "0.5rem",
            padding: "1rem"
          }}
        >
          <h3>{name}</h3>
          <p>
            <strong>Price:</strong>
            {price}
          </p>
          <p>
            <strong>Qunatity:</strong>
            {quantity}
          </p>
          <button onClick={() => RemoveWishlistHandler(id)}>
            Remove From Wishlist
          </button>
        </div>
      ))}
    </div>
  );
}
