import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Checkbox, Select } from "antd";
import PhoneInput from "react-phone-input-2";

import Icon from "../../../components/icon";
import { useForm } from "antd/es/form/Form";

import userStore from "../../../store/user";

import "./style.scss";
import "react-phone-input-2/lib/style.css";
import ArrowBack from "../../../components/arrow-back";
import authStore from "../../../store/auth";
import { signUp } from "../../../api";
import Names from "../../../components/names";
const { Option } = Select;
function Register() {
  const [role, setRole] = useState("client");
  const navigate = useNavigate();
  const [form] = useForm();
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
    if (response) {
      setErrors([]);
      userStore.setRole(role);
      authStore.setToken(response?.loginResponse?.token);
      navigate("/main");
      return;
    } else {
      setErrors(response?.response?.data?.errors);
    }
  };
  return (
    <div className="container_mobile register ">
      <Names title />
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
          <div className={"text"}>Клиент</div>
        </div>
        <div
          onClick={() => setRole("coach")}
          className={`chose ${role === "coach" && "role-active"}`}
        >
          <Icon name={"client"} />
          <Select
            defaultValue="Тренер"
            style={{ width: 120 }}
            onChange={(value) => setRole(value)}
          >
            <Option value="coach">
              <span className={"text"}> Тренер</span>
            </Option>
            <Option value="psychologist">Психолог</Option>
          </Select>
        </div>
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
        <Form.Item
          name="phone"
          label={"Телефон"}
          rules={[
            { required: true, message: "Введите номер телефона!" },
            {
              pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
              message: "Некорректный номер телефона",
            },
          ]}
        >
          <PhoneInput
            country={"kg"}
            value={form.getFieldValue("phone")}
            onChange={(phone) => form.setFieldsValue({ phone })}
            onlyCountries={[
              "kg",
              "kz",
              "ru",
              "uz",
              "us",
              "ca",
              "ae",
              "de",
              "gb",
              "fr",
            ]}
            placeholder="Введите ваш номер телефона"
          />
        </Form.Item>
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
