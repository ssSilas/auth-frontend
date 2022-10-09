import React from "react";
import './Input.css'
const InputLogin = ({name}) => {
  console.log(name);
  return (
    <>
      <div className="container-input-login">
        <input placeholder={name} className="input-login-email" type="text" />
      </div>
    </>
  );
};

export default InputLogin;
