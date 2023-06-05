import React from "react";
import { Button, Input } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/accounts/password/validate");
  };
  return (
    <div className="container_mobile reset_password">
      <div className="title">Востаноление пароля</div>
      <div className="name">Забыли пароль?</div>
      <div className="title">
        Пожалуйста, введите свой адрес электронной почты, и мы вышлим вам
        инструкции по сбросу пароля.
      </div>
      <Input />
      <Button onClick={handleSubmit}>Отправить инструкцию</Button>
    </div>
  );
};

export default ResetPassword;
