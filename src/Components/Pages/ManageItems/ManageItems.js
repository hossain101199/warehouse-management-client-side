import React from "react";
import SetProducts from "../Shared/Hooks/SetProducts";
import Item from "./Item";
const ManageItems = () => {
  const [Products] = SetProducts();
  return (
    <div className="container">
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
          <Item key={Prorduct._id} Prorduct={Prorduct}></Item>
        ))}
      </table>
    </div>
  );
};

export default ManageItems;
