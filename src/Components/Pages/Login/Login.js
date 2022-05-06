import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import googlelogo from "../../../Images/Logo-google-icon-PNG.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, Googleuser, loading, Googleusererror] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (Googleuser) {
      navigate(from);
    }
  }, [Googleuser]);
  return (
    <div className="w-75 m-auto container">
      <form className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div type="button" className="mb-3">
          <p>Forgot Password?</p>
        </div>
        <button type="submit" className="btn btn-outline-success w-100">
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
    </div>
  );
};

export default Login;
