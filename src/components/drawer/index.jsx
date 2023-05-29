import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";

import Icon from "../icon";
import userStore from "../../store/user";
import authStore from "../../store/coach";

import "./style.scss";

const DrawerMenu = observer(({ open, setOpen }) => {
  const [placement, setPlacement] = useState("left");

  useEffect(() => {
    userStore.fetchUser();
  }, []);
  const onClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        title={
          <div className={"drawer_menu"}>
            <Icon name={"profilecircle"} className={"icon"} />
            <div className="name">{userStore.user?.userName}</div>
            <div className="title">Тренер</div>
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
        <div className="settings">
          <Icon name={"setting"} />
          Настройки
        </div>
        <NavLink to={"/dashboard"}>
          <div className="settings">
            <Icon name={"exit"} />
            Выйти
          </div>
        </NavLink>
      </Drawer>
    </>
  );
});
export default DrawerMenu;
