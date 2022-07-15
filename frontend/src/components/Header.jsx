import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <span> | </span>
        {user ? <p>Logout</p> : <Link to="/login">Login</Link>}
      </div>

      {user && <p>Hello {user.username}</p>}
    </div>
  );
};

export default Header;
