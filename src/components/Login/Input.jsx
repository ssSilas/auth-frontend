import React, { useState } from "react";
import "./styles/Input.css";
import ButtonPass from "./Buttons/Button-pass";
const InputLogin = (props) => {
  const [typePass, setTypePass] = useState("password");
  const changeTypePass = (boolean) => {
    boolean ? setTypePass("text") : setTypePass("password");
  };

  return (
    <>
      <div className="container-input-login">
        <input
          placeholder={props.name}
          className="input-login"
          onChange={props.onChange}
          type={props.type != "password" ? props.type : typePass}
          value={props.value}
        />

        {props.type == "password" ? (
          <ButtonPass typeInputPass={changeTypePass} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default InputLogin;
