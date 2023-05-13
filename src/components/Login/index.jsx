import React, { useContext, useState } from 'react';
import {Button, Input} from "antd";
import "./style.scss"
import {AuthContext} from "../../Auth/auth-context/script";
import {auth} from "../../Auth/Firebase/script";
import {NavLink} from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            alert(error);
        }
    };

    if (currentUser) {
        return <div>You are already logged in!</div>;
    }

    return (
        <div className="login container">
            <div className="login_title">Log in</div>
            <div className="login_input">
                <div className="login_input_title">
                    <div>E-mail</div>
                </div>
                <Input onChange={e => setEmail(e.target.value)} />
                <div>Password</div>
                <Input onChange={e => setPassword(e.target.value)} type="password" />
                <NavLink to={"/register"}>
                <div>no account?</div>
                </NavLink>
                <Button className="button" onClick={handleSubmit}>Log in</Button>
            </div>
        </div>
    );
};

export default Login;
