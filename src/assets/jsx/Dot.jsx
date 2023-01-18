import React from "react";
import "../css/Dot.css";
const Dot = ({ justify }) => {
  return (
    <>
      <div style={{ justifyContent: justify }} className="conteiner-dot">
        <span className="dot"></span>
      </div>
    </>
  );
};

export default Dot;
