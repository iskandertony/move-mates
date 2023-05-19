import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import Icon from "../icon";
const Footer = () => {
  return (
    <div className="footer">
      <NavLink to={"/"}>
        <Icon name={"home"} className={"footer_button"} />
      </NavLink>
      <NavLink to={"/"}>
        <Icon name={"personalcard"} className={"footer_button"} />
      </NavLink>
      <NavLink to={"/"}>
        <Icon name={"big_calendar"} className={"footer_button"} />
      </NavLink>
      <NavLink to={"/"}>
        <Icon name={"chat"} className={"footer_button"} />
      </NavLink>
    </div>
  );
};

export default Footer;
