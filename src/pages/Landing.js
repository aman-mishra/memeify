import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Landingcomp from "../components/Landingcomp/Landingcomp";
import Chatcomp from "../components/chatcomp/Chatcomp";
import "../components/Input/Input.css";
import arrow1 from "../assets/Images/Arrow1.png"



class Landing extends React.Component{
  state ={
    visible: true
  };
  render(){
    const slider = this.state.visible ? (
      <Landingcomp />
    ) : (
        <Chatcomp />
    );
    return(
      <div>
        <NavBar />
        {slider}
        <div className="input">
            <input type="text" placeholder="Enter your notes here ...." className="inputarea"/>
            <button className="btn-input">
                <img src={arrow1} alt="enter" onClick={() =>{this.setState({visible : !this.state.visible});}}/>
            </button>
        </div>
      </div>
    )
  }
}
  
  export default Landing;