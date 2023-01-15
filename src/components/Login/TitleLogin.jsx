import React from "react";
import "./styles/TitleLogin.css";
const TitleLogin = ({ text }) => {
  return (
    <>
      <div className="container-title-login">
        <p className="p-title-login">{text}</p>
      </div>
    </>
  );
};

export default TitleLogin;
