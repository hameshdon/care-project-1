import React from "react";

import care from "../../Logos/care.svg"
import retail from "../../Logos/retail.svg"
import food from "../../Logos/food.svg"
import pharmacy from "../../Logos/pharmacy.svg"
import logistic from "../../Logos/logistic.svg"
import clothing from "../../Logos/clothing.svg"
import CarePageFooter from "./CarepageFooter";
import CarepageFooterTwo from "./CarepageFooterTwo";

function CarePage() {
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
             className="retail-logo"
            src={retail}
              alt="logo"  
        />
        <p className="retail-head">Retail</p> 

        </div>
        <div className="retail-container">
        <img
             className="retail-logo"
            src={food}
              alt="logo"  
        />
        <p className="retail-head">Food</p> 

        </div>
        <div className="retail-container">
        <img
             className="retail-logo"
            src={pharmacy}
              alt="logo"  
        />
        <p className="retail-head">Pharmacy</p> 

        </div>
        <div className="retail-container">
        <img
             className="retail-logo"
            src={clothing}
              alt="logo"  
        />
        <p className="retail-head">Clothing</p> 

        </div>
        <div className="retail-container">
        <img
             className="retail-logo"
            src={logistic}
              alt="logo"  
        />
        <p className="retail-head">Logistic</p> 

        </div>
       
        
       </div>
        <CarePageFooter/>
        <CarepageFooterTwo/>
       </>
    )
}
export default CarePage;
