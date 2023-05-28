import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber, Select, Checkbox } from "antd";
import "./style.scss";
import "../../style/App.scss";
import Icon from "../icon";
import { useForm } from "antd/es/form/Form";
import {useAuthHook} from "../../hooks/use-auth-hook";
import useTokenHook from "../../hooks/use-token-hook";
import userStore from "../../store/user"; // Импортируйте userStore

function Register() {
    const [role, setRole] = useState("client");
    const navigate = useNavigate();
    const { Option } = Select;
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

        const response = await signUp(payload);
        if (response?.status === 200) {
            setErrors([]);
            userStore.setUser(response.data.user); // Используйте setUser из userStore
            setToken(response?.data?.token);
            navigate("/main");
            return
        } else {
            setErrors(response?.response?.data?.errors);
        }
    };

    // ... остальная часть кода
}

export default Register;
