import React from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ Prorduct }) => {
  const { _id, Name, Price, Quantity, Supplier, Image, Description } = Prorduct;

  const navigate = useNavigate();

  const navigateToupdate = (id) => {
    navigate(`/ManageItems/${id}`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>

          <p className="card-text">Price {Price} (per kg)</p>
          <p className="card-text">Quantity {Quantity} (kg)</p>
          <p className="card-text">Supplier: {Supplier}</p>
          <p className="card-text">{Description}</p>
        </div>
        <div>
          <button
            onClick={() => navigateToupdate(_id)}
            type="button"
            className="w-100 btn btn-outline-success"
          >
            Manage product
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
