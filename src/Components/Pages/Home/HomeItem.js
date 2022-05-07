import React from "react";

const HomeItem = ({ Prorduct }) => {
  const { _id, Name, Price, Quantity, Supplier, Image, Description } = Prorduct;

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
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
