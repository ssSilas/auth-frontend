import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "../components/Login/Login.jsx";
import CreateUser from "../components/CreateUser/CreateUser.jsx";
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route element={<CreateUser />} path="/criar-usuario" exact />
        {/* <Route component={Usuario} path="/usuario" /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
