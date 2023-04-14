import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import DataCartProvider, { DataCartContext } from "./context/DataContext";
import CartProvider, { CartContext } from "./context/CartContext";
import WishListProvider, { WishlistContext } from "./context/WishListContext";

export { WishlistContext };
export { DataCartContext };
export { CartContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <DataCartProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </DataCartProvider>
    </Router>
  </StrictMode>
);
