import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import googlelogo from "../../../Images/Logo-google-icon-PNG.png";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loding from "../Shared/Loding/Loding";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // ---------------------------------------------------------
  const [signInWithGoogle, Googleuser, loading, Googleusererror] =
    useSignInWithGoogle(auth);
  // ---------------------------------------------------------
  const [
    signInWithEmailAndPassword,
    EmailAndPassworduser,
    EmailAndPasswordloading,
    EmailAndPassworderror,
  ] = useSignInWithEmailAndPassword(auth);
  // ---------------------------------------------------------
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
  });
  // ---------------------------------------------------------
  const [usererror, setusererror] = useState({
    email: "",
    password: "",
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
  const handleloginUser = (e) => {
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
      signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
  };
  // ---------------------------------------------------------
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleForgotpass = () => {
    if (!userInfo.email) {
      setusererror({ ...usererror, email: "Please enter your email" });
    } else {
      sendPasswordResetEmail(userInfo.email);
    }
  };
  useEffect(() => {
    if (sending) {
      toast.success(sending?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [sending]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (EmailAndPassworderror || Googleusererror || error) {
      toast.error(
        EmailAndPassworderror?.message ||
          Googleusererror?.message ||
          error?.message,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }, [Googleusererror, EmailAndPassworderror, error]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (loading || EmailAndPasswordloading) {
      <Loding></Loding>;
    }
  }, [loading, EmailAndPasswordloading]);
  // ---------------------------------------------------------
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (Googleuser || EmailAndPassworduser) {
      navigate(from);
    }
  }, [Googleuser, EmailAndPassworduser]);
  // ---------------------------------------------------------
  return (
    <div className="w-75 m-auto container">
      <form onSubmit={handleloginUser} className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
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
            className="form-control"
            id="exampleInputPassword1"
            required
          />
          {usererror?.password && (
            <div className="form-text text-danger">{usererror.password}</div>
          )}
        </div>
        <div type="button" onClick={handleForgotpass} className="mb-3">
          <p>Forgot Password?</p>
        </div>
        <button
          onClick={() => signInWithEmailAndPassword()}
          type="submit"
          className="btn btn-outline-success w-100"
        >
          LOGIN
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
      <Link to="/CreateAccount">
        <button className="btn btn-outline-success w-100">
          <small>Need an account?</small> <span>SIGN UP</span>
        </button>
      </Link>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
