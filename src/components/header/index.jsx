import React from "react";

import Icon from "../icon";
import Hamburger from "../hamburger";

import "./style.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header ">
      <div className="header_left">
        <Hamburger />
      </div>
      <div className="header_right">
        <NavLink to={"/notifications"}>
          <Icon name={"notification"} />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
