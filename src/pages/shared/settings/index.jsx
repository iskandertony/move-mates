import React from "react";
import ArrowBack from "../../../components/arrow-back";
import Icon from "../../../components/icon";
import { Divider } from "antd";
import { NavLink } from "react-router-dom";
import Names from "../../../components/names";

const Settings = () => {
  const arr = [
    {
      name: "Аккаунт",
      title: "Проверьте свой план",
      img: "",
      link: "/settings/profile",
    },
    {
      name: "Пароль",
      title: "Изменяйте свой пароль в любое время  ",
      img: "",
      link: "password",
    },
    {
      name: "Язык",
      title: "Проверьте свой план",
      img: "",
    },
    {
      name: "Аккаунт",
      title: "Проверьте свой план",
      img: "",
    },
  ];
  return (
    <div className={"container_mobile pt-20"}>
      <Names title={"Главная"} name={"Настройки"} />
      <div className={"pt-20"}>
        {arr.map((item) => (
          <NavLink to={`${item.link}`} className="nav">
            <div className={"flex justify-s alignC"}>
              <div className={"flex alignC gap-10"}>
                <Icon name={"big_calendar"} />
                <div>
                  <div className={"title"}>{item.name}</div>
                  <div className={"text"}>{item.title}</div>
                </div>
              </div>
              <Icon name={"arrow_rigth"} />
            </div>
            <Divider />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Settings;
