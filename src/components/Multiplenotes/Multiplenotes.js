import React from "react";
import "./Multiplenotes.css";
import arrow1 from "../../assets/Images/Arrow1.png"


const Multiplenotes = (props) => {
    return(
        <div className="multiinput">
            <input type="text" placeholder="Enter Multiple notes ..." className="multiinputarea"/>
            <button className="btn-input">
                <img src={arrow1} alt="enter" onClick={() => console.log("clicked")}/>
            </button>
        </div>
    );
};


export default Multiplenotes;