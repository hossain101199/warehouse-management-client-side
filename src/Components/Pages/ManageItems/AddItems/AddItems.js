import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleAddItems = (e) => {
    e.preventDefault();
    const Name = e.target.Name.value;
    const Quantity = e.target.Quantity.value;
    const Price = e.target.Price.value;
    const Supplier = e.target.Supplier.value;
    const Image = e.target.Image.value;
    const Email = e.target.Email.value;
    const Description = e.target.Description.value;
    const product = {
      Name,
      Quantity,
      Price,
      Supplier,
      Image,
      Email,
      Description,
    };
    // send data to the server
    fetch("https://healthy-health-warehouse.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("product added successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
      });
  };
  return (
    <div className="container">
      <form onSubmit={handleAddItems} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            name="Name"
            required
            type="text"
            className="form-control"
            id="Name"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputQuantity" className="form-label">
            Quantity (kg)
          </label>
          <input
            name="Quantity"
            required
            type="Number"
            className="form-control"
            id="Quantity"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="Price" className="form-label">
            Price (per kg)
          </label>
          <input
            name="Price"
            required
            type="Number"
            className="form-control"
            id="Price"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="Supplier" className="form-label">
            Supplier name
          </label>
          <input
            name="Supplier"
            required
            type="text"
            className="form-control"
            id="Supplier"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Image" className="form-label">
            Image URL
          </label>
          <input
            name="Image"
            required
            type="text"
            className="form-control"
            id="Image"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Email" className="form-label">
            User Email
          </label>
          <input
            name="Email"
            defaultValue={user.email}
            readOnly
            type="email"
            className="form-control"
            id="Email"
          />
        </div>
        <div className="col-12">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea
            name="Description"
            required
            className="form-control"
            id="Description"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="w-100 btn btn-outline-success">
            Ad to stock
          </button>
        </div>
      </form>
      <hr />
      <Link to="/ManageItems">
        <button type="button" className="w-100 btn btn-outline-success">
          Manage all product <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItems;
