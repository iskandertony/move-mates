import React from "react";
import Hamburger from "../../components/hamburger";
import { Input } from "antd";
import Icon from "../../components/icon";
import "./style.scss";
import listUsers from "../../store/listUsers";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
const Chat = observer(() => {
  console.log("sf", listUsers.users);

  return (
    <div className={"chat container_mobile pt-20"}>
      <div className={"flex alignC justify-s"}>
        <div>
          <Hamburger />
        </div>
        <div className={"name"}>Все чаты</div>
      </div>
      <Input />
      <div className={"flex flex-column gap-20"}>
        {listUsers.users &&
          listUsers.users.map((item) => (
            <NavLink to={`/chat/${item.id}`} className="nav">
              <div className={"flex alignC justify-s"}>
                <div className={"flex alignC gap-10"}>
                  <Icon name={"big_calendar"} />
                  <div>
                    <div className={"title"}>{item.userName}</div>
                    <div className={"text"}>last sms</div>
                  </div>
                </div>

                <div>
                  <div className={"text"}>last time sms</div>
                  <div className={"text"}>is read?</div>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
});

export default Chat;
