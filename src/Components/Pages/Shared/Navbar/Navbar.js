import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../Images/logo (4).png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark  navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center fw-bolder fs-3"
          >
            <img
              src={logo}
              alt=""
              // width="auto"
              height="50"
              className="d-inline-block align-text-top me-3"
            />
            Healthy Health
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold fs-4">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/Home">
                  Home
                </NavLink>
              </li>

              {user ? (
                <>
                  (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/ManageItems">
                      Manage Items
                    </NavLink>
                  </li>
                  )(
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/AddItems">
                      Add Item
                    </NavLink>
                  </li>
                  )(
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/MyItems">
                      My Items
                    </NavLink>
                  </li>
                  )(
                  <li onClick={logout} className="nav-item">
                    <Link className="nav-link" to="#">
                      Log Out
                    </Link>
                  </li>
                  )
                </>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
