import React from "react";
import { Button, Input } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Names from "../../../components/names";
const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/accounts/password/validate");
  };
  return (
    <div className="container_mobile reset_password">
      <Names title text={"Вход"} sub_text={"Востаноление пароля"} />

      <div className={"reset_password_content"}>
        <div className="title">Забыли пароль?</div>
        <div className="text">
          Пожалуйста, введите свой адрес электронной почты, и мы вышлим вам
          инструкции по сбросу пароля.
        </div>
        <Input placeHoder={"Е-майл"} />
      </div>
      <Button onClick={handleSubmit} className={"button"}>
        Отправить инструкцию
      </Button>
    </div>
  );
};

export default ResetPassword;
