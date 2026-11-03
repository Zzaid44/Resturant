import { useEffect, useState } from "react";
import api from "../api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  
  const getAllProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    
    getAllProducts(); 
  }, []);
  return { products };
};
