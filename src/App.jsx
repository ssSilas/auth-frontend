import "./App.css"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import CreateUser from "./components/CreateUser/CreateUser.jsx";
import ListProducts from "./components/Products/List/List";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken()
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="general">
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/criar-usuario" element={<CreateUser />} />
        <Route path="/products" element={<ListProducts />} />
      </Routes>
    </div>
  );
}

export default App;
