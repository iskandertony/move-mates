import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber, Select, Checkbox } from "antd";
import "./style.scss";
import "../../style/App.scss";
import Icon from "../icon";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const navigate = useNavigate();
  const { Option } = Select;
  const selectBefore = (
    <Select
      defaultValue="add"
      style={{
        width: 60,
      }}
    >
      <Option value="add">
        <Icon name={"client"} />
      </Option>
      <Option value="minus">america</Option>
    </Select>
  );
  return (
    <div className="container_mobile register">
      <Icon name={"back"} />
      <div className="register_title">Создать учетную запись</div>
      <div className="register_text">Создайте учетную запись, чтобы начать работу с приложением</div>
      <div className="role-selection">
        <div
          onClick={() => setRole("client")}
          className={`chose ${role === "client" && "role-active"}`}
        >
          <Icon name={"trainer"} />
          Клиент
        </div>
        <div
          onClick={() => setRole("trainer")}
          className={`chose ${role === "trainer" && "role-active"}`}
        >
          <Icon name={"client"} />
          Тренер
        </div>
        <div></div> {/*нужен для space-beetwen*/}
      </div>
      <div className="role-line">
        <div className={role === "client" ? "line-active client" : ""}></div>
        <div className={role === "trainer" ? "line-active trainer" : ""}></div>
      </div>
      <Form className="validation">
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Имя!" }]}
        >
          <div className="title">Имя</div>
          <Input
            placeholder="Введите ваше имя"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <div className="title">Е-майл</div>
          <Input
            placeholder="Введите ваш е-майл"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
              message: "Invalid phone number",
            },
          ]}
        >
          <div className="title">Телефон</div>
          <InputNumber addonBefore={selectBefore} defaultValue={+996} className={"input_border"}/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <div className="title">Пароль</div>
          <Input.Password
            placeholder="Введите ваш пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
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
