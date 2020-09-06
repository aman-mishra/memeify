import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Input from "../components/Input/Input";
import Landingcomp from "../components/Landingcomp/Landingcomp";


const Landing = (props) => {
    return (
      <div>
       <NavBar />
       <Landingcomp />
       <Input />
      </div>
    );
  };
  
  export default Landing;