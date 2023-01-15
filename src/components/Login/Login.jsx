import React from "react";
import ButtonSign from "./Buttons/Button-sign";
import Dot from "./Dot";
import Error from "./Error";
import ForgotPass from "./ForgotPass";
import InputLogin from "./Input";
import TitleLogin from "./TitleLogin";
import "./styles/Login.css";
import { useState } from "react";
import { signIn } from "../../api/login";

function ScreenLogin() {
  const [error, setError] = useState("");

  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const changeEmail = (e) => {
    setLogin(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = await signIn(login, pass);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="screen-login">
      <form className="form-login" onSubmit={handleSubmit}>
        <Dot justify="right" />
        <div className="title-login">
          <TitleLogin text="Sign In" />
        </div>
        <div className="interface-login">
          <InputLogin
            onChange={changeEmail}
            value={login}
            name={"Login"}
            type="text"
          />
          <InputLogin
            onChange={changePass}
            value={pass}
            name={"Password"}
            type="password"
          />
          <Error message={error} />
          <ForgotPass />
          <ButtonSign name={"Sign In"} />
        </div>
        <Dot justify="left" />
      </form>
    </div>
  );
}

export default ScreenLogin;
