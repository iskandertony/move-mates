import React from "react";

import { NavLink } from "react-router-dom";
import { Button } from "antd";

import "./style.scss";
const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="img" />
      <NavLink to="/login" className="nav">
        <Button className="button_dashboard" block>
          Вход
        </Button>
      </NavLink>
      <NavLink to="/register" className="nav">
        <Button className="button_dashboard pink" block>
          Регистрация
        </Button>
      </NavLink>
    </div>
  );
};

export default WelcomePage;
