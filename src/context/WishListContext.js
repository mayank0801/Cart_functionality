import { createContext, useState } from "react";

const WishlistContext = createContext();
export { WishlistContext };
export default function WishListProvider({ children }) {
  const [wishlistItems, setWishListItems] = useState([]);
  // console.log(children,"children in wishlistProvider")
  function AddToWishlistHandler(item) {
    console.log("Added to wishlist", item);
    setWishListItems([...wishlistItems, item]);
  }
  function RemoveWishlistHandler(idtoRemove) {
    setWishListItems((wishlistItems) =>
      wishlistItems.filter(({ id }) => id !== idtoRemove)
    );
  }
  return (
    <div>
      <WishlistContext.Provider
        value={{ wishlistItems, AddToWishlistHandler, RemoveWishlistHandler }}
      >
        {children}
      </WishlistContext.Provider>
    </div>
  );
}
