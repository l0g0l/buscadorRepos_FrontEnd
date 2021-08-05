import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import './login.scss'


const crypto = require('crypto');

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Campo obligatorio
            </div>
        );
    }
};

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            if (localStorage.getItem(`userEmail-${email}`) !== null) {
                const password_hash = crypto.createHash('sha256').update(password).digest('base64')
                if (localStorage.getItem(`userEmail-${email}`) === password_hash) {
                    props.history.push("/home");
                    window.location.reload();
                } else {
                    setLoading(false);
                    setMessage('Email o contraseña incorrectos');
                }
            } else {
                setLoading(false);
                setMessage('Email o contraseña incorrectos');
            }

        } else {
            setLoading(false);
        }
    };


    return (
        <div className="container">
            <div className="formdiv-login">
                <div className="txt-title">
                    <h1>SearchGithubRepository</h1>
                </div>
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="formdiv">
                        <label className="label" for="email">Email</label>
                        <Input
                            type="text"
                            className="formdiv-input"
                            id="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required]} />
                    </div>
                    <div className="formdiv">
                        <label for="password">Password</label>
                        <Input
                            type="password"
                            className="formdiv-input"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </div>
                    <div className="formbtnlogin">
                        <button className="formbtn-btn" disabled={loading}>
                            {loading && (
                                <span className="error"></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>

                <div className="form-login-txt">
                    <p className="form-login-txt-p">¿No tienes cuenta? <Link to="./signup" >Regístrate</Link></p>
                </div>
            </div>


        </div>
    )

}

export default Login



