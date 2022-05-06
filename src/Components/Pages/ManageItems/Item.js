import React from "react";

const Item = ({ Prorduct }) => {
  const { _id, Name, Price, Quantity, Supplier, Image } = Prorduct;
  return (
    <tbody>
      <tr>
        <th scope="row">{_id}</th>
        <td>
          <img style={{ width: "50px" }} className="mx-3" src={Image} alt="" />
          {Name}
        </td>
        <td>{Price}</td>
        <td>{Quantity}</td>
        <td>{Supplier}</td>
        <td>
          <button type="button" class="btn btn-outline-success me-3">
            Update
          </button>
          <button type="button" class="btn btn-outline-danger">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Item;
