import React, { useState } from "react";
import { Button, Input, Divider } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Icon from "../icon";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      navigate("/home");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="login container_mobile">
      <Icon name={"back"} />
      <div className="login_title">Авторизоваться</div>
      <div className="login_text">
        Заполнить форму входа, чтобы начать работу с приложением
      </div>
      <div className="login_input">
        <div>
          <div className="login_input_title">
            <div className="title">Имя</div>
            <Input onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="title">Пароль</div>
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <NavLink to={""} className="nav">
            <div className="text">Забыли пароль ?</div>
          </NavLink>
        </div>
        <div>
          <Button className="button" onClick={handleSubmit} block>
            Войти
          </Button>
          <Divider>или</Divider>
            <Button className="button" onClick={handleSubmit} block>
                Google
            </Button>
          <NavLink to={"/register"} className="nav">
            <div className="register_text">
              Нет аккаунта? <span className="register_title"> Зарегистрируйтесь.</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
