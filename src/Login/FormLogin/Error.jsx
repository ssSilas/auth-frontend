import React from "react";
import "./Error.css";
const Error = ({ message }) => {
  return (
    <>
      <div className="conteiner-error-message">
        <p className="error-message">{message}</p>
      </div>
    </>
  );
};

export default Error;
