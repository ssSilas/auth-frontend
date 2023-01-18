import React from "react";
import "./styles/CreateUser.css";
import Dot from "../../assets/jsx/Dot";
import Title from "../../assets/jsx/Title";
import InputsCreateUser from "./InputCreateUser";

function CreateUser() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <div className="screen-create-user">
      <form className="form-create-user" onSubmit={handleSubmit}>
        <Dot justify="right" />
        <div className="title">
          <Title text="Create user" />
        </div>
        <InputsCreateUser/>
        <Dot justify="left" />
      </form>
    </div>
  );
}

export default CreateUser;
