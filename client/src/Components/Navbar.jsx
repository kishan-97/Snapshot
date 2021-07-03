import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="logo-img" src="/logo.png" alt="Logo"></img>
      <div className="nav-links">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
