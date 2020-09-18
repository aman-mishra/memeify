import React from "react";
import "./Uploadcomp.css";

import pages from "../../assets/Images/uploadpages.png"

class Uploadcomp extends React.Component{
    constructor(){
        super()
        this.onClickbtn=this.onClickbtn.bind(this)

        const img0 = require('../../assets/Images/notesformat.PNG');
        const img1 = require('../../assets/Images/loading.gif');
        const img2 = require('../../assets/Images/uploaddownload.png');

        this.state = {
            index: 0,
            imglist: [img0,img1,img2],
            textlist: ['Upload','Processing','Download']
        }
    }
    onClickbtn() {
        if (this.state.index  === 0){
            this.setState({
                index: 1
            })
        } else {
            this.setState({
            index: 2
        })
    }
    }

    render(){
        return(
            <div className="uploadcomp">
            <div className="leftdiv">
                <center>
                <img src={pages} alt="pages" className="pagesicon"/>
                <button className="upload-btn" onClick={this.onClickbtn}>{this.state.textlist[this.state.index]} </button>
                <ul className="instruct-list">
                    <li>Click on Upload</li>
                    <li>Select Document</li>
                    <li>Download Result</li>
                </ul>
                </center>
                
            </div>
           <div>
                <img src={this.state.imglist[this.state.index]} alt="" className="changingimg"/>
           </div>
        </div>
        )
    }
}
export default Uploadcomp;
