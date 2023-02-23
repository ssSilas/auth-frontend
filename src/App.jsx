import "./App.css"
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import CreateUser from "./components/CreateUser/CreateUser.jsx";
import ListProducts from "./components/Products/List/List";
import getToken from "./api/token";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}


function App() {
  const token = getToken()
  if (!token) {
    return (
      <div className="general">
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className="general">
      <Routes>
        <Route path="/home" element={<ListProducts />} />
        {/* <Route path="/home-manager" element={<Login setToken={setToken} />} /> */}
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/criar-usuario" element={<CreateUser />} />
        <Route path="/products" element={<ListProducts />} />
      </Routes>
    </div>
  );
}

export default App;
