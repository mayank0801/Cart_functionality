import { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { DataCartContext } from "..";

export default function ProductList() {
  const { data1: Data } = useContext(DataCartContext);
  // console.log("Data", Data);
  // const [Data, setData] = useState([]);
  // // const []

  // const getData = async () => {
  //   try {
  //     const {
  //       data: { products }
  //     } = await fakeFetch("https://example.com/api/products");
  //     setData(products);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      {/* product is listed below */}
      {Data.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            margin: "0.75rem",
            padding: "1rem"
          }}
        >
          <ProductCard {...product} noDetail />
        </div>
      ))}
    </div>
  );
}
