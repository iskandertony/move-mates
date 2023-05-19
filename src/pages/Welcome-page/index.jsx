import React from "react";
import "./style.scss";
import {NavLink} from "react-router-dom";
const WelcomePage = () => {
  return (
    <div className="welcome container">
      <div className="title">Welcome Page</div>
      <NavLink to="/register" className="nav">
        <div>Registration</div>
      </NavLink>
        <NavLink to="/main" className="nav">
            <div>Main</div>
        </NavLink>
    </div>
  );
};

export default WelcomePage;
