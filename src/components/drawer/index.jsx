import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";

import Icon from "../icon";
import userStore from "../../store/user";
import authStore from "../../store/auth";

import "./style.scss";
import Avatar from "../avatar";

const DrawerMenu = observer(({ open, setOpen }) => {
  const [placement, setPlacement] = useState("left");

  const onClose = () => {
    setOpen(!open);
  };
  const logOut = () => {
    sessionStorage.removeItem("token");
    authStore.setToken(null);
    localStorage.clear();
  };

  return (
    <>
      <Drawer
        title={
          <div className={"drawer_menu"}>
            <Avatar />
            <div className="name">{userStore.user?.firstName}</div>
            <div className="title">{userStore.role}</div>
          </div>
        }
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className={"drawer_menu"}
        style={{ width: "280px" }}
      >
        <NavLink to={"/payment"}>
          <div className="settings">
            <Icon name={"wallet"} />
            Платежи
          </div>
        </NavLink>
        <NavLink to={"/settings"}>
          <div className="settings">
            <Icon name={"setting"} />
            Настройки
          </div>
        </NavLink>
        <NavLink to={"/dashboard"}>
          <div className="settings" onClick={logOut}>
            <Icon name={"exit"} />
            Выйти
          </div>
        </NavLink>
      </Drawer>
    </>
  );
});
export default DrawerMenu;
