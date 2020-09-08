import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Multiplenotes from "../components/Multiplenotes/Multiplenotes";
import Uploadcomp from "../components/Uploadcomp/Uploadcomp"
import "../components/Multiplenotes/Multiplenotes.css"

const Main = (props) => {
    return (
      <div>
        <NavBar />
        <Uploadcomp />
        <Multiplenotes />
        <button className="submit">Submit</button>
      </div>
    );
  };
  
  export default Main;