import React from "react";
import "../css/Title.css";
const Title = ({ text }) => {
  return (
    <>
      <div className="container-title">
        <p>{text}</p>
      </div>
    </>
  );
};

export default Title;
