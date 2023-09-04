import React from "react";
import Icon from "../icon";
import "./style.scss";
const ContactClient = () => {
  return (
    <div className={"contact_client"}>
      <div className={"contact_client_card"}>
        <Icon name={"chat"} />
        <div className={"text"}> Связаться с клиентом</div>
      </div>

      <div className={"title"}>Для доп вопросов</div>
    </div>
  );
};

export default ContactClient;
