import { useEffect, useState } from "react";

const SetProducts = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://healthy-health-warehouse.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [Products, setProducts];
};

export default SetProducts;
