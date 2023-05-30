import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import Icon from "../icon";
const Footer = () => {
  return (
    <div className="footer container_mobile">
      <NavLink to={"/main"}>
        <div className={"footer_nav"}>
          <Icon name={"home"} className={"footer_button"} />
          <div className={"text"}>Главная</div>
        </div>
      </NavLink>
      <NavLink to={"/client"}>
        <div className={"footer_nav"}>
          <Icon name={"personalcard"} className={"footer_button"} />
          <div className={"text"}>Тренеры</div>
        </div>
      </NavLink>
      <NavLink to={"/calendar"}>
        <div className={"footer_nav"}>
          <Icon name={"big_calendar"} className={"footer_button"} />
          <div className={"text"}>Календарь</div>
        </div>
      </NavLink>
      <NavLink to={"/chat"}>
        <div className={"footer_nav"}>
          <Icon name={"chat"} className={"footer_button"} />
          <div className={"text"}>Чат</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Footer;
