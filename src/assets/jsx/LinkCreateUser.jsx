import React from "react";
import "../css/LinkCreateUser.css";

import { Link } from "react-router-dom";
import arrowRight from "../../icons/arrow-right.png";

const LinkCreateUser = ({to, name}) => {
  const arrow = arrowRight;
  return (
    <>
      <div className="container-forgot-pass">
        <img className="arrow" src={arrow} />
        <Link className="register-link" to={to}>
          <span>{name}</span>
        </Link>
      </div>
    </>
  );
};

export default LinkCreateUser;
