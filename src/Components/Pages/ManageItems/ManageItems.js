import React, { useState } from "react";
import { Link } from "react-router-dom";
import SetProducts from "../Shared/Hooks/SetProducts";
import Item from "./Item";
const ManageItems = () => {
  const [Products, setProducts] = SetProducts();
  const handleDelete = (id) => {
    const DeleteAlert = window.confirm("Are you sure you want to delete?");
    if (DeleteAlert) {
      const url = `https://healthy-health-warehouse.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = Products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">Manage Products</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Serial number</th>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Suplier name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {Products.map((Prorduct) => (
          <Item
            key={Prorduct._id}
            Prorduct={Prorduct}
            handleDelete={handleDelete}
          ></Item>
        ))}
      </table>
      <hr />
      <Link to="/AddItems">
        <button type="button" className="w-100 btn btn-outline-success">
          Add products <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default ManageItems;
