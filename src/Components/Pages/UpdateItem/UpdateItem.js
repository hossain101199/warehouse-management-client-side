import React from "react";

const UpdateItem = () => {
  return (
    <div className="container">
      <h1>UpdateItem</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="Name" />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputQuantity" className="form-label">
            Quantity
          </label>
          <input type="Number" className="form-control" id="Quantity" />
        </div>
        <div className="col-md-2">
          <label htmlFor="Price" className="form-label">
            Price (per kg)
          </label>
          <input type="Number" className="form-control" id="Price" />
        </div>
        <div className="col-md-2">
          <label htmlFor="Supplier" className="form-label">
            Supplier name
          </label>
          <input type="text" className="form-control" id="Supplier" />
        </div>
        <div className="col-md-6">
          <label htmlFor="Image" className="form-label">
            Image URL
          </label>
          <input type="text" className="form-control" id="Image" />
        </div>
        <div className="col-md-6">
          <label htmlFor="Email" className="form-label">
            User Email
          </label>
          <input type="email" className="form-control" id="Email" />
        </div>
        <div className="col-12">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea className="form-control" id="Description"></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-success">
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
