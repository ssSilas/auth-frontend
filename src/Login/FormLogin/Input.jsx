import React from "react";
import './Input.css'
const InputLogin = ({name, type}) => {
  console.log(name);
  return (
    <>
      <div className="container-input-login">
        <input placeholder={name} className="input-login" type={type} />
      </div>
    </>
  );
};

export default InputLogin;
