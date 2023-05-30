import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Checkbox, InputNumber, Select } from "antd";

import Icon from "../icon";
import { useForm } from "antd/es/form/Form";
import { useAuthHook } from "../../hooks/use-auth-hook";
import useTokenHook from "../../hooks/use-token-hook";
import userStore from "../../store/user";

import "./style.scss";
import "../../style/App.scss";

const { Option } = Select;
const selectBefore = (
  <Select defaultValue="+996">
    <Option value="+996">KGZ</Option>
    <Option value="+7">RUS</Option>
    <Option value="+1">USA</Option>
  </Select>
);
function Register() {
  const [role, setRole] = useState("client");
  const navigate = useNavigate();
  const [form] = useForm();
  const { signUp } = useAuthHook();
  const { setToken } = useTokenHook();
  const [errors, setErrors] = useState([]);
  const onFinish = async (values) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      role: role,
    };

    const response = await signUp(payload, role);
    if (response?.status === 200) {
      setErrors([]);
      userStore.setUser(response.data?.user);
      setToken(response?.data?.token);
      navigate("/main");
      return;
    } else {
      setErrors(response?.response?.data?.errors);
    }
  };
  return (
    <div className="container_mobile register">
      <Icon name={"back"} />
      <div className="register_title">Создать учетную запись</div>
      <div className="register_text">
        Создайте учетную запись, чтобы начать работу с приложением
      </div>
      <div className="role-selection">
        <div
          onClick={() => setRole("client")}
          className={`chose ${role === "client" && "role-active"}`}
        >
          <Icon name={"trainer"} />
          Клиент
        </div>
        <div
          onClick={() => setRole("coach")}
          className={`chose ${role === "coach" && "role-active"}`}
        >
          <Icon name={"client"} />
          Тренер
        </div>
        <div /> {/*нужен для space-beetwen*/}
      </div>
      <div className="role-line">
        <div className={role === "client" ? "line-active client" : ""}></div>
        <div className={role === "coach" ? "line-active coach" : ""}></div>
      </div>
      <Form
        name="register"
        className="validation"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Имя"
          rules={[
            { required: true, message: "Введите ваше имя!" },
            { min: 2, message: "Имя должно содержать не менее 2-х символов" },
          ]}
        >
          <Input placeholder="Введите ваше имя" />
        </Form.Item>
        <Form.Item
          name="email"
          label={"Е-майл"}
          rules={[
            { required: true, message: "Введите ваш е-майл!" },
            {
              type: "email",
              message: "Введен некорректный е-майл",
            },
          ]}
        >
          <Input placeholder="Введите ваш е-майл" />
        </Form.Item>
        {/*<Form.Item*/}
        {/*  name="phone"*/}
        {/*  label={"Телефон"}*/}
        {/*  rules={[*/}
        {/*    { required: true, message: "Введите номер телефона!" },*/}
        {/*    {*/}
        {/*      pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,*/}
        {/*      message: "Некорректный номер телефона",*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*>*/}
        {/*  <InputNumber*/}
        {/*    addonBefore={selectBefore}*/}
        {/*    defaultValue={+996}*/}
        {/*    className={"flex"}*/}
        {/*  />*/}
        {/*</Form.Item>*/}
        <Form.Item
          name="password"
          label={"Пароль"}
          rules={[
            { required: true, message: "Введите пароль!" },
            {
              min: 6,
              message: "Пароль должен содержать не менее 6-ти символов",
            },
          ]}
        >
          <Input.Password placeholder="Введите ваш пароль" />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        "Необходимо принять условия использования и политику конфиденциальности!"
                      )
                    ),
            },
          ]}
        >
          <div className={"check_box"}>
            <Checkbox />
            <div>
              Я принимаю и согласен Условия использования и Политика
              Конфиденциальности
            </div>
          </div>
        </Form.Item>
        <Button htmlType="submit" block>
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
}

export default Register;
