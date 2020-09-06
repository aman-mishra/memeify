import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Input from "../components/Input/Input";

import name from "../assets/Images/Memeifyname.png"
import line from "../assets/Images/Yourstudies.png"
import quote_no from "../assets/Images/quote_no.png"
import quote_yes from "../assets/Images/quote_yes.png"
import meme_no from "../assets/Images/meme_no.png"
import meme_yes from "../assets/Images/meme_yes.png"

const Landing = (props) => {
    return (
      <div>
       <NavBar />
       <table className="aligncont">
         <tr>
          <td>
            <tr>
              <img src={name} alt="Memeify" />
            </tr>
            <tr>
              <img src={line} alt="Your Studies" />
            </tr>
          </td>
          <td>
              <table>
                <tr>
                  <td>
                    <img src={meme_no} alt="drake no" />
                  </td>
                  <td>
                    <img src={quote_no} alt="reading 10 pages of notes" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={meme_yes} alt="Drake Yes" />
                  </td>
                  <td>
                    <img src={quote_yes} alt="Going through 100 meme of the same subject !!" />
                  </td>
                </tr>
              </table>
              </td>
            </tr>
          </table>
       <Input />
       
      </div>
    );
  };
  
  export default Landing;