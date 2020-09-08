import React from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
        return (
            <div className="container">
                    <form className="form-bg mt-4 px-4 py-4 mx-auto">
                        <h1 className="title">Log In</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address or Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-theme">Login</button>
                    </form>
            </div>
        );
    };

export default LoginForm;