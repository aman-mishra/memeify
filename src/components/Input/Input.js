import React from "react";
import "./Input.css";
import arrow1 from "../../assets/Images/Arrow1.png"


const Input = (props) => {
    return(
        <div className="input">
            <input type="text" placeholder="Enter your notes here ... now" className="inputarea"/>
            <button className="btn">
                <img src={arrow1} alt="enter" onClick={() => console.log("clicked")}/>
            </button>
        </div>
    );
};


export default Input;