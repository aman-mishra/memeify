import React from "react";
import "./Navbar.css";
import logoimg from "../../assets/Images/Memeify.png";

const Navbar = (props) => {
    return(
        <div className="navbar">
           <img src={logoimg} alt="Memeify" className="logoimg"/>
           <table>
               <tr>
                   <th>
                   <button className="signup"> Sign Up </button>
                   </th>
                   <th>
                   <button className="login"> Login </button>
                   </th>
               </tr>
           </table>
        </div>
    );
};

export default Navbar;
