import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateItem = () => {
  const [user, loading, error] = useAuthState(auth);

  const { productID } = useParams();

  const [selectedproduct, setselectedproduct] = useState({});
  const [reload, setreload] = useState(false);

  useEffect(() => {
    const url = `https://healthy-health-warehouse.herokuapp.com/products/${productID}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setselectedproduct(data));
  }, [reload]);

  const handleUpdateItems = (e) => {
    e.preventDefault();
    const Name = e.target.Name.value;
    const Quantity =
      parseInt(e.target.Quantity.value) + parseInt(selectedproduct.Quantity);
    const Price = e.target.Price.value;
    const Supplier = e.target.Supplier.value;
    const Image = e.target.Image.value;
    const Email = selectedproduct.Email;
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
    fetch(
      `https://healthy-health-warehouse.herokuapp.com/products/${productID}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setreload(!reload);
        toast.success("product updated successfully!", {
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
  const delivered = () => {
    const Name = selectedproduct.Name;
    const Price = selectedproduct.Price;
    const Supplier = selectedproduct.Supplier;
    const Image = selectedproduct.Image;
    const Email = selectedproduct.Email;
    const Description = selectedproduct.Description;
    const oldQuantity = parseInt(selectedproduct.Quantity);
    const Quantity = oldQuantity - 1;
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
    fetch(
      `https://healthy-health-warehouse.herokuapp.com/products/${productID}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setreload(!reload);
        toast.success("product Delivered successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="container">
      <h1 className="text-center">Update Item: {selectedproduct._id}</h1>
      <div className="card h-100 w-50 m-auto">
        <img src={selectedproduct.Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{selectedproduct.Name}</h5>

          <p className="card-text">Price {selectedproduct.Price} (per kg)</p>
          <p className="card-text">Quantity {selectedproduct.Quantity} (kg)</p>
          <p className="card-text">Supplier: {selectedproduct.Supplier}</p>
          <p className="card-text">{selectedproduct.Description}</p>
        </div>
        <div>
          <button
            onClick={() => delivered(selectedproduct._id)}
            type="button"
            className="w-100 btn btn-outline-danger"
          >
            Delivered
          </button>
        </div>
      </div>
      <hr />
      <form onSubmit={handleUpdateItems} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            defaultValue={selectedproduct.Name}
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
            // defaultValue={selectedproduct.Quantity}
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
            defaultValue={selectedproduct.Price}
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
            defaultValue={selectedproduct.Supplier}
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
            defaultValue={selectedproduct.Image}
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
            defaultValue={selectedproduct.Email}
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
            defaultValue={selectedproduct.Description}
            name="Description"
            required
            className="form-control"
            id="Description"
          ></textarea>
        </div>
        <div className="text-center col-12">
          <button type="submit" className="w-100 btn btn-outline-success">
            Update stock
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateItem;
