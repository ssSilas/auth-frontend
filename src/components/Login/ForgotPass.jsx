import React from "react";
import "./styles/ForgotPass.css";
import { Link } from "react-router-dom";
import arrowRight from "../../icons/arrow-right.png";

const ForgotPass = () => {
  const arrow = arrowRight;
  return (
    <>
      <div className="container-forgot-pass">
        <img className="arrow" src={arrow} />
        <Link className="register-link" to="/criar-usuario">
          <span>Create an account</span>
        </Link>
      </div>
    </>
  );
};

export default ForgotPass;
