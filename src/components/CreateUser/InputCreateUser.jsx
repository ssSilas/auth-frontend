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
      <div className="container-create-user">
        <input
          placeholder="Name"
          className="inputs-create-user"
          onChange={props.addName}
          type="text"
        />
        <input
          placeholder="Email"
          className="inputs-create-user"
          onChange={props.addEmail}
          type="email"
        />

        <input
          placeholder="Login"
          className="inputs-create-user"
          onChange={props.addLogin}
          type="text"
        />

        <input
          placeholder="Password"
          className="inputs-create-user"
          onChange={props.addPassword}
          type="password"
        />

        <select onChange={props.addRoles} className="inputs-create-user" name="Roles">
          <option value="admin">Administrador</option>
          <option value="client">Cliente</option>
        </select>
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
