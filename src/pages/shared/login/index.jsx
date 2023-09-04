import React, { useState } from "react";
import { Button, Input, Divider, Form, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";
import "./style.scss";
import ArrowBack from "../../../components/arrow-back";
import authStore from "../../../store/auth";
import userStore from "../../../store/user";
import { login } from "../../../api";
import Names from "../../../components/names";

const Login = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleSubmit = async (values) => {
    const payload = {
      username: values?.email,
      password: values?.password,
    };
    try {
      const response = await login(payload);
      if (response) {
        userStore.setRole(response.roles[0].toLowerCase());
        authStore.setToken(response?.token);
        navigate("/main");
        return;
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
      <Names title />
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
            <NavLink to={"/accounts/password/reset"} className="nav">
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
            <NavLink to={"/main"} className="nav">
            <Button className="button" block>
              Google
            </Button>
            </NavLink>
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
});

export default Login;
