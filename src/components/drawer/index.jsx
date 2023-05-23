import React, { useState } from "react";

import { Drawer } from "antd";
import Icon from "../icon";

import "./style.scss";
import { NavLink } from "react-router-dom";
const DrawerMenu = ({ open, setOpen }) => {
  const [placement, setPlacement] = useState("left");

  const onClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <Drawer
        title={
          <div className={"drawer_menu"}>
            <Icon name={"profilecircle"} className={"icon"} />
            <div className="name">Айдай</div>
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
        <div className="settings">
          <Icon name={"exit"} />
          Выйти
        </div>
      </Drawer>
    </>
  );
};
export default DrawerMenu;
