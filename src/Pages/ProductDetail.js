import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { DataCartContext } from "../context/DataContext";
import { WishlistContext } from "../context/WishListContext";

export default function ProductDetail() {
  // const [dataCome,setDataCome]=useState(false);
  const { ProductId } = useParams();
  const { data1 } = useContext(DataCartContext);
  const { AddToWishlistHandler } = useContext(WishlistContext);
  const { AddToCartHandler } = useContext(CartContext);
  // console.log(data1);
  const Product = data1.find(({ id }) => id === Number(ProductId));
  // console.log("product", Product);

  // console.log(id,name);

  // console.log("Destructure Data",id,name)
  return (
    <>
      <h3>{Product?.name}</h3>
      <p>{Product?.description}</p>
      <p>
        <strong>Price:</strong> Rs{Product?.price}
      </p>
      <p>
        <strong>Category:</strong>
        {Product?.category}
      </p>
      <p>
        <strong>Brand:</strong>
        {Product?.brand}
      </p>
      <p>
        <strong>Qunatity:</strong>
        {Product?.quantity}
      </p>
      <button onClick={() => AddToCartHandler(Product)}>Add to Cart</button>
      <button onClick={() => AddToWishlistHandler(Product)}>
        Add To Wishlist
      </button>
    </>
  );
}
