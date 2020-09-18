import React from "react";
import NavBar from "../components/Navbar/Navbar";
import LoginForm from "../components/Login/LoginForm";

class Login extends React.Component{
  render(){
    return(     
      <div>
        <NavBar />
        <LoginForm />
      </div>
    )
  }
}
  
export default Login;