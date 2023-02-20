import React from "react";
import "./Button.css";

const ButtonCreate = ({ name }) => {
  return (
    <div className="container-button-submit">
      <button className="button-submit" type="submit">Criar</button>
    </div>
  );
};

export default ButtonCreate;
