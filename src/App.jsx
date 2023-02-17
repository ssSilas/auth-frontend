import Routers from "./routes/routes.js";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import ScreenLogin from "./components/Login/Login.jsx";
import CreateUser from "./components/CreateUser/CreateUser.jsx";

function App() {
  return (
    <div className="general">
      <Routes>
        <Route path="/login" element={<ScreenLogin />} />
        <Route path="/criar-usuario" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
