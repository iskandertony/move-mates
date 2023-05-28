import React from "react";

import {NavLink} from "react-router-dom";
import {Button} from "antd"

import "./style.scss";
const WelcomePage = () => {
  return (
    <div className="welcome">
        <div className="img"></div>
      <div className="text">Choose your option</div>
      <NavLink to="/register" className="nav">
        <Button className="button">Registration</Button>
      </NavLink>
        <NavLink to="/login" className="nav">
            <Button className="button" >Login</Button>
        </NavLink>
    </div>
  );
};

export default WelcomePage;
