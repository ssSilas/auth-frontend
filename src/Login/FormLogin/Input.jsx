import React from "react";
import "./Input.css";
const InputLogin = (props) => {
  return (
    <>
      <div className="container-input-login">
        <input placeholder={props.name} className="input-login" onChange={props.onChange}  type={props.type} value={props.value} />
      </div>
    </>
  );
};

export default InputLogin;
