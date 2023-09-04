import React from "react";
import Validate from "../../../assets/imgs/validateps.png";
import "./style.scss";
import Icon from "../../../components/icon";
const ValidatePassword = () => {
  return (
    <div className="container_mobile validate_password ">
      <Icon name={"close"} />
      <div className={"validate_password_content"}>
        <div className={"title"}>Спасибо!</div>
        <div className={"text"}>
          Мы отправили вам ссылку для востоновления на адрес
          namesurname@gmail.com
        </div>
        <div>
          <img src={Validate} alt="" />
        </div>
        <div className={"text"}>
          Не получили письмо? <span className={"span"}>Отправить</span>{" "}
        </div>
      </div>
      <div className={"title"}>
        По любым вопросам обращайтесь по номеру +996 123 456 789
      </div>
    </div>
  );
};

export default ValidatePassword;
