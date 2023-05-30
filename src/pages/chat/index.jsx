import React from "react";
import Hamburger from "../../components/hamburger";
import { Input } from "antd";
import Icon from "../../components/icon";
import "./style.scss"
const Chat = () => {
  const arr = [
    {
      name: "Aidai",
    },
    {
      name: "Iska",
    },
  ];
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
      {arr.map((item) => (
        <div className={"flex alignC justify-s"}>
          <div className={"flex alignC gap-10"}>
            <Icon name={"big_calendar"} />
            <div>
              <div className={"title"}>{item.name}</div>
              <div className={"text"}>last sms</div>
            </div>
          </div>

          <div>
            <div className={"text"}>last time sms</div>
            <div className={"text"}>is read?</div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Chat;
