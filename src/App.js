import Header from "./Pages/Header";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import ErrorPage from "./Pages/ErrorPage";
import ProductDetail from "./Pages/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:ProductId" element={<ProductDetail />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
