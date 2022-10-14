import React from "react";
import care_commerce_logo from "../Logos/care_commerce_logo.svg"
import {useNavigate, 
    // useLocation 
 } from "react-router-dom";
import { isMobileDevice } from "./IsMobile";
// import { isMobileDevice } from "../../../IsMobile";

function Navbar() {
    const history = useNavigate();

    return (
       <>
   
       <div className="navbar-align">
             <div >
            <img
            src={care_commerce_logo}
              alt=""
              className="logo"
              onClick={() => history("/australia")}            
            />
          </div>
       
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="nav-menu-align">
                Services
            </div>
            <div className="nav-menu-align">
                Pricing   
            </div>
            <div className="nav-menu-align">
                How it works?
            </div>
            <div className="nav-menu-align">
                Our Team
            </div>
            <div className="nav-menu-align">
                About us
            </div>
            <div className="nav-menu-align">
                Contact
            </div>
          
            <button className="nav-menu-align nav-book">
                Book Free Consultation
            </button >


          </div>

        </div>
       
     

           </>
    )
}
export default Navbar;
