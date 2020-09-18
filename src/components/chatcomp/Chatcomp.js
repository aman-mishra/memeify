import React from "react";
import "./Chatcomp.css";
import memeop from "../../assets/Images/memeop.png"
import like from "../../assets/Images/like 1.png"
import dislike from "../../assets/Images/dislike 1.png"


const Chatcomp = (props) => {
    return(
        <div className="comparea">
            <div className='userip'>
                <p className='iptext'>debit the receiver and credit the giver.</p>
            </div>
            <div className='memeop'>
            <table>
                <tr>
                    <td>
                    <img src={memeop} alt='meme output' className='meme'/>
                    </td>
                    <td>
                        <tr>
                        <button className='likebtn'>
                    <img src={like} alt='Like' className='like'/>
                </button>
                        </tr>
                        <tr>
                        <button className='dislikebtn'>
                    <img src={dislike} alt='Dislike' className='dislike'/>
                </button>
                        </tr>
                    </td>
                </tr>
            </table>
                

            </div>
            
        </div>
    );
};


export default Chatcomp;