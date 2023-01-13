import React from "react";
import ButtonSign from "./FormLogin/Buttons/Button-sign";
import Dot from "./FormLogin/Dot";
import Error from "./FormLogin/Error";
import ForgotPass from "./FormLogin/ForgotPass";
import InputLogin from "./FormLogin/Input";
import TitleLogin from "./FormLogin/TitleLogin";
import "./Login.css";
import { useState } from "react";
import { signIn } from "../api/login";

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
