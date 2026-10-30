import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register.jsx";
import { ToastContainer } from "react-toastify";
import Login from "./pages/auth/Login.jsx";
import Home from "./pages/customer/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={2000} theme="colored" />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
