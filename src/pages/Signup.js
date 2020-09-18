import React from "react";
import NavBar from "../components/Navbar/Navbar";
import SignUpForm from "../components/Signup/SignUpForm";


class Signup extends React.Component{
  render(){
    return(     
      <div>
          <NavBar />
          <SignUpForm />
      </div>
    )
  }
}
  
export default Signup;