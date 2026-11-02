import { useState } from "react";
import api from "./api";
import { useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.products);
      console.log(res.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <></>;
}

export default App;
