import React, {  useState } from "react";
import { Button, Input } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      navigate("/Home");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="login container">
      <div className="login_title">Log in</div>
      <div className="login_input">
        <div className="login_input_title">
          <div>E-mail</div>
        </div>
        <Input onChange={(e) => setEmail(e.target.value)} />
        <div>Password</div>
        <Input onChange={(e) => setPassword(e.target.value)} type="password" />
        <Button className="button" onClick={handleSubmit}>
          Log in
        </Button>
        <NavLink to={"/register"} className="nav">
          <div>no account?</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
