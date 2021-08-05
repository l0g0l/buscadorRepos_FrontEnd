import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

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

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                No es un email válido
            </div>
        );
    }
};

const vusername = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Por favor introduzca su usuario de GitHub
            </div>
        );
    }
};

const vpassword = (value) => {
    if ((value.length < 6 || value.length )> 10 && value(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/)) {
        return (
            <div className="alert alert-danger" role="alert">
                Entre 6 y 10 caracteres. Debe contener al menos un número, mayúscula, minúscula y carácter especial
            </div>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const name = e.target.value;
        setUsername(name);
    };


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            if (localStorage.getItem(`userEmail-${email}`) !== null) {
                setMessage('Usario ya registrado')
                setSuccessful(false)
            } else {
                localStorage.setItem(`userEmail-${email}`, crypto.createHash('sha256').update(password).digest('base64'))
                setMessage('Usuario creado correctamente')
                setSuccessful(true)
            }
        }
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Username</label>
                                <Input
                                    type="text"
                                    className="formdiv-input"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="formdiv-input"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="formdiv-input"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                />
                            </div>

                            <div className="formbtn">
                                <button className="btn btn-primary btn-block">Regístrate</button>
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="error">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
            <p className="form-p">¿Ya tienes cuenta?<Link to='./' className="formlink" >Inicia sesión</Link></p>

        </div>
    );
};

export default Register;