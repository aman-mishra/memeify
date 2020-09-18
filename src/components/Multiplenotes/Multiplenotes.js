import React from "react";
import "./Multiplenotes.css";
import arrow1 from "../../assets/Images/Arrow1.png";
import Uploadcomp from "../Uploadcomp/Uploadcomp";
import Notesclips from "../Notesclips/Notesclips";



class Multiplenotes extends React.Component{
    state ={
        visible: true
      };
    render(){
        const slider = this.state.visible ? (
            <Uploadcomp />
          ) : (
              <Notesclips />
          );
        return(
            <div>
                {slider}
                <div className="multiinput">
                    <input type="text" placeholder="Enter Multiple notes ..." className="multiinputarea"/>
                    <button className="btn-input">
                        <img src={arrow1} alt="enter" onClick={() =>{this.setState({visible : !this.state.visible});}}/>
                    </button>
                </div>
            </div>
        )
    }
}


export default Multiplenotes;