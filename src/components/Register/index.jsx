import React, { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./style.scss"
import "../../App.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  return (
    <Form  className="container register">
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
      <NavLink to={"/login"}>
        <div>have account?</div>
      </NavLink>
    </Form>
  );
}

export default Register;
