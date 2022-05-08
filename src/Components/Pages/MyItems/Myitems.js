import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SetProducts from "../Shared/Hooks/SetProducts";

const Myitems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [Products, setProducts] = SetProducts();
  const myitems = Products.filter((myitem) => myitem.Email === user?.email);
  // ----------------------------------------------------------
  const navigate = useNavigate();
  const navigateToupdate = (id) => {
    navigate(`/ManageItems/${id}`);
  };
  // ----------------------------------------------------------
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
        {myitems.map((Prorduct) => (
          <tbody>
            <tr>
              <th scope="row">{Prorduct._id}</th>
              <td>
                <img
                  style={{ width: "50px" }}
                  className="mx-3"
                  src={Prorduct.Image}
                  alt=""
                />
                {Prorduct.Name}
              </td>
              <td>{Prorduct.Price}</td>
              <td>{Prorduct.Quantity}</td>
              <td>{Prorduct.Supplier}</td>
              <td>
                <button
                  onClick={() => navigateToupdate(Prorduct._id)}
                  type="button"
                  className="btn btn-outline-success me-3"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(Prorduct._id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
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

export default Myitems;
