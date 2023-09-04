import React, { useState, useEffect } from "react";
import "./style.scss";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../icon";
import userStore from "../../store/user";

const Footer = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div className="footer container_mobile">
      <NavLink to={"/main"}>
        <div className={"footer_nav"} onClick={() => setActivePage("/main")}>
          <Icon
            name={activePage === "/main" ? "home_active" : "home"}
            className={"footer_button"}
          />
          <div className={activePage === "/main" ? "text_active" : "text"}>
            Главная
          </div>
        </div>
      </NavLink>
      <NavLink to={"/client"}>
        <div className={"footer_nav"} onClick={() => setActivePage("/client")}>
          <Icon
            name={
              activePage === "/client" ? "personalcard_active" : "personalcard"
            }
            className={"footer_button"}
          />
          <div className={activePage === "/client" ? "text_active" : "text"}>
            {userStore.role === "coach" ? "Клиенты" : "Тренеры"}
          </div>
        </div>
      </NavLink>
      <NavLink to={"/calendar"}>
        <div
          className={"footer_nav"}
          onClick={() => setActivePage("/calendar")}
        >
          <Icon
            name={activePage === "/calendar" ? "big_calendar_active" : "big_calendar"}
            className={"footer_button"}
          />
          <div className={activePage === "/calendar" ? "text_active " : "text"}>
            Календарь
          </div>
        </div>
      </NavLink>
      <NavLink to={"/chat"}>
        <div className={"footer_nav"} onClick={() => setActivePage("/chat")}>
          <Icon
            name={activePage === "/chat" ? "chat_active" : "chat"}
            className={"footer_button"}
          />
          <div className={activePage === "/chat" ? "text_active " : "text"}>
            Чат
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Footer;
