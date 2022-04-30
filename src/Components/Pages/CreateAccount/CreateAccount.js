import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googlelogo from "../../../Images/Logo-google-icon-PNG.png";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import Loding from "../Shared/Loding/Loding";

const CreateAccount = () => {
  // ---------------------------------------------------------
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
    Confirmpassword: "",
  });
  // ---------------------------------------------------------
  const [usererror, setusererror] = useState({
    email: "",
    password: "",
    Confirmpassword: "",
    allError: "",
  });
  // ---------------------------------------------------------
  const handleEmail = (e) => {
    const emilRegex = /\S+@\S+\.\S+/;
    const validEmail = emilRegex.test(e.target.value);
    if (validEmail) {
      setuserInfo({ ...userInfo, email: e.target.value });
      setusererror({ ...usererror, email: "" });
    } else {
      setusererror({ ...usererror, email: "❌ Invalid email" });
      setuserInfo({ ...userInfo, email: "" });
    }
  };
  // ---------------------------------------------------------
  const handlePassword = (e) => {
    const PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = PasswordRegex.test(e.target.value);
    if (validPassword) {
      setuserInfo({ ...userInfo, password: e.target.value });
      setusererror({ ...usererror, password: "" });
    } else {
      setusererror({
        ...usererror,
        password:
          "Password must be minimum eight characters,at least one letter and one number",
      });
      setuserInfo({ ...userInfo, password: "" });
    }
  };
  // ---------------------------------------------------------
  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setuserInfo({ ...userInfo, Confirmpassword: e.target.value });
      setusererror({ ...usererror, password: "" });
    } else {
      setusererror({
        ...usererror,
        password: "Password don't match",
      });
      setuserInfo({ ...userInfo, Confirmpassword: "" });
    }
  };
  // ---------------------------------------------------------
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, Googleuser, Googleloading, Googleerror] =
    useSignInWithGoogle(auth);
  // ---------------------------------------------------------
  const handlecreateUser = (e) => {
    e.preventDefault();
    if (!userInfo.email) {
      setusererror({ ...usererror, email: "❌ Invalid email" });
    }
    if (!userInfo.password) {
      setusererror({
        ...usererror,
        password:
          "Password must be minimum eight characters,at least one letter and one number",
      });
    } else {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
  };
  // ---------------------------------------------------------
  useEffect(() => {
    const Error = error || Googleerror;
    if (Error) {
      toast.warn(Error?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error, Googleerror]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (loading || Googleloading) {
      <Loding></Loding>;
    }
  }, [loading, Googleloading]);
  // ---------------------------------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || Googleuser) {
      navigate(from);
    }
  }, [user, Googleuser]);
  // ---------------------------------------------------------
  return (
    <div className="w-75 m-auto">
      <form className="mb-3">
        <div className="mb-3">
          <label className="form-label">Your full name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {usererror?.email && (
            <div id="emailHelp" className="form-text text-danger">
              {usererror.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {usererror?.password && (
            <div className="form-text text-danger">{usererror.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Confirm password
          </label>
          <input
            onChange={handleConfirmPassword}
            type="password"
            name="Confirmpassword"
            className="form-control"
            id="exampleInputPassword"
          />
        </div>
        <button
          onClick={handlecreateUser}
          type="submit"
          className="btn btn-outline-success w-100"
        >
          SIGN UP
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center">
        <hr className="w-50 " />
        <h4 className="m-3 text-muted">OR</h4>
        <hr className="w-50 h-" />
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline-success w-100 mb-3"
      >
        <img height="25" src={googlelogo} alt="" /> Sign in with Google
      </button>
      <br />
      <Link to="/Login">
        <button className="btn btn-outline-success w-100">
          <small>Already a user?</small> <span>LOGIN</span>
        </button>
      </Link>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CreateAccount;
