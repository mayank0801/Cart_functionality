import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../Api/fakeFetch";
export const DataCartContext = createContext();

export default function DataCartProvider({ children }) {
  const [data1, setData1] = useState([]);
  const getData1 = async () => {
    try {
      const {
        data: { products }
      } = await fakeFetch("https://example.com/api/products");
      setData1(products);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData1();
  }, []);
  return (
    <>
      <DataCartContext.Provider value={{ data1 }}>
        {children}
      </DataCartContext.Provider>
    </>
  );
}
