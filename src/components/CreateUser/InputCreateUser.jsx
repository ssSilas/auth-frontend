import React, { useState } from "react";
import "./styles/InputCreateUser.css";
import ButtonPass from "../../assets/jsx/Button-pass";

const InputsCreateUser = (props) => {
  const [typePass, setTypePass] = useState("password");
  const changeTypePass = (boolean) => {
    boolean ? setTypePass("text") : setTypePass("password");
  }
  
  return (
    <>
      <div className="container-input-login">
        <input
          placeholder="Name"
          className="inputs-create-user"
          // onChange={props.onChange}
          type="text"
        />
        <input
          placeholder="Email"
          className="inputs-create-user"
          // onChange={props.onChange}
          type="email"
        />

        <input
          placeholder="Login"
          className="inputs-create-user"
          // onChange={props.onChange}
          type="text"
        />

        <input
          placeholder="Password"
          className="inputs-create-user"
          // onChange={props.onChange}
          type="password"
        />
      </div>
      {props.type == "password" ? (
        <ButtonPass typeInputPass={changeTypePass} />
      ) : (
        ""
      )}
    </>
  );
};

export default InputsCreateUser;
