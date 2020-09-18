import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Multiplenotes from "../components/Multiplenotes/Multiplenotes";
import Memeoutput from "../components/Memeoutput/Memeoutput";
import "../components/Multiplenotes/Multiplenotes.css"

class Main extends React.Component{
  state ={
    visible: true,
    value : 'Upload',
  };
  render(){
    const slider = this.state.visible ? (
      <Multiplenotes />
    ) : (
        <Memeoutput />
    );
    return(
      <div>
        <NavBar />
        {slider}
        <button className="submit" onClick={() =>{this.setState({visible : !this.state.visible , value : 'Download'});}}>{this.state.value}</button>
      </div>
    )
  }
}
  
  export default Main;