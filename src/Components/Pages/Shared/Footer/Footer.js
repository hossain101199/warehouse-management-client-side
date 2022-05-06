import React from "react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="text-center text-white bg-dark p-3">
      <h5>
        <i className="fa-regular fa-copyright"></i> {year} | Healthy Health |
        All Rights Reserved.
      </h5>
      <h6 className="fs-4">
        <i type="button" className="fa-brands fa-facebook mx-3"></i>
        <i type="button" className="fa-brands fa-facebook-messenger mx-3"></i>
        <i type="button" className="fa-brands fa-instagram-square mx-3"></i>
        <i type="button" className="fa-brands fa-twitter-square mx-3"></i>
      </h6>
    </div>
  );
};

export default Footer;
