import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

import './LoginPage.scss';

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="Loginpage_container">
      <h1>Sign in</h1>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
