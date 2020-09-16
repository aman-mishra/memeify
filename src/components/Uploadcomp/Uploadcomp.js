import React from "react";
import "./Uploadcomp.css";

import pages from "../../assets/Images/uploadpages.png"
import procesing from "../../assets/Images/loading.gif"

const Uploadcomp = (props) => {
    return(
        <div className="uploadcomp">
            <div className="leftdiv">
                <center>
                <img src={pages} alt="pages" className="pagesicon"/>
                <button className="upload-btn">Upload</button>
                <ul className="instruct-list">
                    <li>Click on Upload</li>
                    <li>Select Document</li>
                    <li>Download Result</li>
                </ul>
                </center>
                
            </div>
           <div>
                <img src={procesing} alt="processing" className="changingimg"/>
           </div>
        </div>
    );
};

export default Uploadcomp;
