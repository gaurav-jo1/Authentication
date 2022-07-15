// Tools
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

// -- components --
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

// -- State Management --
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {
  let { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="*" element={user ? <HomePage /> : <LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default PrivateRoute;
