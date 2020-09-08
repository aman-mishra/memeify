import React from "react";
import "./SignUpForm.css";

const SignUpForm = (props) => {
        return (
            <div className="container">
                    <form className="form-bg mt-4 px-4 py-4 mx-auto">
                        <h1 className="title">Sign Up</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" className="form-control" id="exampleUsername" aria-describedby="myNameId" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <center><button type="submit" className="btn btn-theme">Sign Up</button></center>
                        
                    </form>
            </div>
        );
    };

export default SignUpForm;