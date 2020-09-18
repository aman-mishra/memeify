import React from "react";
import "./Navbar.css";
import logoimg from "../../assets/Images/Memeify.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import history from '../../history';

const Navbar = (props) => {
    return(
        <div className="navbar">
           <img src={logoimg} alt="Memeify" className="logoimg"/>
           <table>
               <tr>
                   <th>
                   <button className="signup" onClick={() => history.push('/Signup')}> Sign Up </button>
                   </th>
                   <th>
                   <button type="submit" className="login" onClick={() => history.push('/Login')}> Login </button>
                   </th>
               </tr>
           </table>
           
           
        </div>
    );
};

export default Navbar;
