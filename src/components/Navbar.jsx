import React from "react";
import care_commerce_logo from "../Logos/care_commerce_logo.svg"


function Navbar() {
    return (
        <div className="navbar-align">
             <div >
            <img
            src={care_commerce_logo}
              alt="logo"
              className="logo"
            
            />
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
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
    )
}
export default Navbar;
