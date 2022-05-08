import React from "react";
import { useNavigate } from "react-router-dom";
import SetProducts from "../Shared/Hooks/SetProducts";

const Item = ({ Prorduct, handleDelete }) => {
  const { _id, Name, Price, Quantity, Supplier, Image } = Prorduct;
  const navigate = useNavigate();
  const navigateToupdate = (id) => {
    navigate(`/ManageItems/${id}`);
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
          <button
            onClick={() => navigateToupdate(_id)}
            type="button"
            className="btn btn-outline-success me-3"
          >
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
