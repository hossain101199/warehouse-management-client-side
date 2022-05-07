import React from "react";

const Item = ({ Prorduct }) => {
  const { _id, Name, Price, Quantity, Supplier, Image } = Prorduct;
  const handleDelete = (id) => {
    const DeleteAlert = window.confirm("Are you sure you want to delete?");
    if (DeleteAlert) {
      const url = `https://healthy-health-warehouse.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
          }
        });
    }
  };
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
          <button type="button" className="btn btn-outline-success me-3">
            Update
          </button>
          <button
            onClick={() => handleDelete(_id)}
            type="button"
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Item;
