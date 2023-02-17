import React, { useState } from "react";
import "./styles/CreateUser.css";
import Dot from "../../assets/jsx/Dot";
import Title from "../../assets/jsx/Title";
import InputsCreateUser from "./InputCreateUser";
import Error from "../Login/Error";
import { createUser } from "../../api/user";
import ButtonCreate from "./Buttons/Button-create";
import LinkCreateUser from "../../assets/jsx/LinkCreateUser";

function CreateUser() {
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");

  const addName = (e) => {
    setName(e.target.value);
  };
  const addEmail = (e) => {
    setEmail(e.target.value);
  };
  const addLogin = (e) => {
    setLogin(e.target.value);
  };
  const addPassword = (e) => {
    setPassword(e.target.value);
  };
  const addRoles = (e) => {
    setRoles(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(
        name,
        email,
        login,
        password,
        roles
      );
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  };

  return (
    <div className="screen-create-user">
      <form className="form-create-user" onSubmit={handleSubmit}>
        <Dot justify="right" />
        <div className="title">
          <Title text="Create user" />
        </div>
        <LinkCreateUser name={"Sign In"} to={'/login'}/>
        <InputsCreateUser
          addName={addName}
          addEmail={addEmail}
          addLogin={addLogin}
          addPassword={addPassword}
          addRoles={addRoles}
        />
        <Error message={error} />
        <ButtonCreate name={"Sign up"}></ButtonCreate>
        <Dot justify="left" />
      </form>
    </div>
  );
}

export default CreateUser;
