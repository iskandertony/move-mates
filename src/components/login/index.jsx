import React, { useState } from "react";
import { Button, Input, Divider, Form, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";

import Icon from "../icon";
import useTokenHook from "../../hooks/use-token-hook";

import "./style.scss";

const Login = inject("authStore")(
  observer(({ authStore }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { login } = authStore;
    const { setToken } = useTokenHook();
    const [error, setError] = useState(false);
    const handleSubmit = async (values) => {
      const payload = {
        username: values?.email, //'admin@move-mates.com',
        password: values?.password, //'1q2w3e!Q@W#E'
      };
      try {
        const response = await login(payload);
        if (response && response?.status === 200) {
          setToken(response?.data?.token);
          navigate("/main");
        } else if (response && response?.status === 401) {
          setError(true);
        }
      } catch (error) {
        console.log("Error while trying to login:", error);
        setError(true);
      }
    };

    return (
      <div className="login container_mobile">
        <Icon name={"back"} />
        <div className="login_title">Авторизоваться</div>
        <div className="login_text">
          Заполнить форму входа, чтобы начать работу с приложением
        </div>
        {error && (
          <Alert
            message="Неправильный логин или пароль"
            type="error"
            className="alert"
          />
        )}
        <div className="login_input">
          <Form
            form={form}
            onFinish={handleSubmit}
            initialValues={{ email: "", password: "" }}
            className="form_login"
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
                <Button
                  type="primary"
                  htmlType="submit"
                  className="button"
                  block
                >
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
  })
);

export default Login;
