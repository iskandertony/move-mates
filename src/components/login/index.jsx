import React, { useState } from "react";
import { Button, Input, Divider, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Icon from "../icon";
import { useAuthHook } from "../../hooks/use-auth-hook";
import useTokenHook from "../../hooks/use-token-hook";

import "./style.scss";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { login } = useAuthHook();
  const { setToken } = useTokenHook();
  const handleSubmit = async (values) => {
    const payload = {
      username: values?.email, //'admin@move-mates.com',
      password: values?.password, //'1q2w3e!Q@W#E'
    };
    const response = await login(payload);
    if (response && response?.status === 200) {
      setToken(response?.data?.token);
      navigate("/main");
      return;
    }
    alert(response);

  };
  return (
    <div className="login container_mobile">
      <Icon name={"back"} />
      <div className="login_title">Авторизоваться</div>
      <div className="login_text">
        Заполнить форму входа, чтобы начать работу с приложением
      </div>
      <div className="login_input">
        <Form
          form={form}
          onFinish={handleSubmit}
          initialValues={{ email: "", password: "" }}
        >
          <div>
            <div className="login_input_title">
              <div className="title">Имя</div>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </div>

            <div className="title">Пароль</div>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <NavLink to={""} className="nav">
              <div className="text">Забыли пароль ?</div>
            </NavLink>
          </div>
          <div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="button" block>
                Войти
              </Button>
            </Form.Item>
            <Divider>или</Divider>
            <Button className="button" block>
              Google
            </Button>
            <NavLink to={"/register"} className="nav">
              <div className="register_text">
                Нет аккаунта?{" "}
                <span className="register_title"> Зарегистрируйтесь.</span>
              </div>
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
