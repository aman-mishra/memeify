import React from "react";
import "./Memeoutput.css"
import img1 from "../../assets/Images/1.jpeg" 
import img2 from "../../assets/Images/2.jpeg" 
import img3 from "../../assets/Images/3.jpeg" 
import img4 from "../../assets/Images/a.jpeg" 
import img5 from "../../assets/Images/b.jpeg" 
import img6 from "../../assets/Images/c.jpeg" 


class Memeoutput extends React.Component{
    render(){
        
        return(
            <div>
                <div className="div1">
                    <img src={img1} alt='meme1' className="memeimg"/>
                </div>
                <div className="div2">
                <img src={img2} alt='meme1' className="memeimg"/>
                </div>
                <div className="div3">
                <img src={img3} alt='meme1' className="memeimg"/>
                </div>
                <div className="div4">
                <img src={img4} alt='meme1' className="memeimg"/>
                </div>
                <div className="div5">
                <img src={img5} alt='meme1' className="memeimg"/>
                </div>
                <div className="div6">
                <img src={img6} alt='meme1' className="memeimg"/>
                </div>
            </div>
        )
    }
}

export default Memeoutput;