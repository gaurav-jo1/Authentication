import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import './Header.scss';

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="Header_container">
      <div className="Header_container_links">
        <Link to="/"> <p>Home</p> </Link>

        {user ?  <Link to="/" onClick={logoutUser}> <p>Logout</p> </Link> : <Link to="/login"><p>Login</p></Link> }
      </div>
      
      {user && <p className="Header_user_hello">Hello {user.username}</p>}
    </div>
  );
};

export default Header;
