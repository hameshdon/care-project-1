import React from "react";

import care from "../../../Logos/care.svg"
import retail from "../../../Logos/retail.svg"
import food from "../../../Logos/food.svg"
import pharmacy from "../../../Logos/pharmacy.svg"
// import logistic from "../../../Logos/logistic.svg"
import clothing from "../../../Logos/clothing.svg"
import CarepageHomeFooter from "./CarepageHomeFooter";
import CarepageHomeFooterTwo from "./CarepageHomeFooterTwo";



function CarePageHome() {
    return (
       <>
     
       <div className="care-content ">
        <h1 className="content-head ">Streamline the Business Process <br/>
        Through the Intelligent Automation.
        </h1>
        <p className="content">Leaveragin modern technologies to Capture and accelerate document processing timelines for claims management, settlement and resolution. </p>
      
        <div className="care-logo-container">
            <img
             className="care-logo"
            src={care}
              alt="logo"  
        />
          </div>
      
       </div>

       <div className="retail-menu-align">
        <div className="retail-container">
        <img
             className="care-logo-img"
            src={retail}
              alt="logo"  
        />
        <p className="provider-head">For Aged Care & NDIS</p> 
        <p className="retail-head">Providers</p> 

        </div>
        <div className="retail-container">
        <img
             className="care-logo-img"
            src={food}
              alt="logo"  
        />
         <p className="provider-head">For Aged Care & NDIS</p> 
        <p className="retail-head">Suppliers</p> 

        </div>
        <div className="retail-container">
        <img
             className="care-logo-img"
            src={pharmacy}
              alt="logo"  
        />
         <p className="provider-head">For Aged Care</p> 
        <p className="retail-head">Recipent</p> 

        </div>
        <div className="retail-container">
        <img
             className="care-logo-img"
            src={clothing}
              alt="logo"  
        />
         <p className="provider-head">For Aged Care & NDIS</p> 
        <p className="retail-head">NDIs Recipent</p> 

        </div>
      
       
        
       </div>
        <CarepageHomeFooter/>
        <CarepageHomeFooterTwo/>
      
       </>
    )
}
export default CarePageHome;
