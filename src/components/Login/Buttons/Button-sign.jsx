import React from "react";
import "./Button.css";

const ButtonSign = ({ name }) => {
  return (
    <>
      <div className="container-button-submit">
        <button className="button-submit">{name}</button>
      </div>
    </>
  );
};

export default ButtonSign;
