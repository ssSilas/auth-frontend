import React from "react";
import "./Button.css";
import eyeImg from "../../../icons/eye.png";
import blindEyeImg from "../../../icons/blind-eye.png";
import { useState } from "react";

const ButtonPass = ({ typeInputPass }) => {
  const eye = <img src={eyeImg} />;
  const blindEye = <img src={blindEyeImg} />;
  const [hide, setHide] = useState(true);

  const tooglePass = () => {
    setHide(hide ? false : true);
    typeInputPass(hide);
  };

  return (
    <>
      <div className="container-button-pass">
        <button onClick={tooglePass} type="button" className="button-view-pass">
          {hide ? blindEye : eye}
        </button>
      </div>
    </>
  );
};

export default ButtonPass;
