import React from "react";
import invoice from "../../../Logos/footer_logo/invoice.svg"
import claims from "../../../Logos/footer_logo/claims.svg"
import payment from "../../../Logos/footer_logo/payment.svg"
import "../../../Footer.css"
import {useNavigate, useLocation  } from "react-router-dom";
function CarepageHomeFooter() {
     const history = useNavigate();
    return (
       <>
     
      <div className="care-page-footer">
        <h1>Collect your invoice once.  Empower every team.</h1>
        <p>Our technology automates and inegrate end to end claim settlement process.<br/>
            Empowering the Aged Care Industry</p>

        <div className="footer-align">
         <div>
            <div style={{display:"flex"}}>
                  <div className="footer-container"> 
        <img
             className="retail-logo"
            src={invoice}
              alt="logo"  
        />
        

                 </div>
                 <div style={{textAlign:"initial"}}>
                    <p className="foot-content-head">Invoice</p>
                    <p className="foot-content">All Invoice Processing</p>
                 </div>
               
            </div>
            <div>
               
                 </div>
                 <p className="service-content">Save times in analysing, validating the invoices<br/> and reduces the risk of duplication.</p>
                <div className="read-more"
                  onClick={() => history("/readmoreone")}
                >
                    Read more...
                </div>
                 </div>


                 <div>
            <div style={{display:"flex"}}>
                  <div className="footer-container"> 
        <img
             className="retail-logo"
            src={claims}
              alt="logo"  
        />
        

                 </div>
                 <div style={{textAlign:"initial"}}>
                    <p className="foot-content-head">Claims</p>
                    <p className="foot-content">Intelligent Claim Processing</p>
                 </div>
               
            </div>
            <div>
               
                 </div>
                 <p className="service-content">
                 Lower your costs, streamline settlements and <br/>reduce processing timelines while keeping<br/> customers engaged and well informed.

                 </p>
                <div className="read-more">
                    Read more...
                </div>
                 </div>

                 <div>
            <div style={{display:"flex"}}>
                  <div className="footer-container"> 
        <img
             className="retail-logo"
            src={payment}
              alt="logo"  
        />
        

                 </div>
                 <div style={{textAlign:"initial"}}>
                    <p className="foot-content-head">Payments</p>
                    <p className="foot-content">Automated Payment Processing</p>
                 </div>
               
            </div>
            <div>
               
                 </div>
                 <p className="service-content">
                 Faster your payment processing and cycle times,<br/> Reduced your transaction Cost, eliminates the<br/> chance of duplicate payments and input errors.    
                </p>
                <div className="read-more">
                    Read more...
                </div>
                 </div>
          
         
        </div>

      </div>
       
       </>
    )
}
export default CarepageHomeFooter;
