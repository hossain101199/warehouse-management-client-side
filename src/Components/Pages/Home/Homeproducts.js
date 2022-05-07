import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SetProducts from "../Shared/Hooks/SetProducts";
import HomeItem from "./HomeItem";

const Homeproducts = () => {
  const [Products, setProducts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);
  const [pagesize, setpagesize] = useState(6);

  useEffect(() => {
    fetch(
      `https://healthy-health-warehouse.herokuapp.com/products?page=${page}&size=${pagesize}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, pagesize]);

  useEffect(() => {
    fetch("https://healthy-health-warehouse.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.products;
        const pages = Math.ceil(count / 6);
        setpageCount(pages);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">Healthy Health products</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Products.map((Prorduct) => (
          <HomeItem key={Prorduct._id} Prorduct={Prorduct}></HomeItem>
        ))}
      </div>

      <ul className="pagination justify-content-center">
        {[...Array(pageCount).keys()].map((number) => (
          <li
            key={number}
            className="page-item"
            onClick={() => setpage(number)}
          >
            <Link className="page-link" to="#">
              {number + 1}
            </Link>
          </li>
        ))}
        <span> | </span>
        <select
          id="inputState"
          onChange={(e) => setpagesize(e.target.value)}
          className="form-select w-25"
        >
          <option value="6" defaultValue>
            6
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </ul>
    </div>
  );
};

export default Homeproducts;
