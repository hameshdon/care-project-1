import React from "react";
import { Tabs } from 'antd';
import flowchart from "../..//Logos/footer_logo/flowchart.svg"
import buyer_exp from "../..//Logos/footer_logo/buyer_exp.svg"
import flowchart3 from "../..//Logos/footer_logo/flowchart3.svg"
import unified_1 from "../..//Logos/footer_logo/unified_1.svg"
import unified_2 from "../..//Logos/footer_logo/unified_2.svg"
import unified_3 from "../..//Logos/footer_logo/unified_3.svg"


import {useNavigate, 
  // useLocation 
} from "react-router-dom";


import "../../Footer.css";
function CarepageFooterTwo() {
  const history = useNavigate();
  return (
    <>
      <div className="care-page-footer2">
        <div>
          <h1>Streamline Revenue Operations</h1>
          <p>
            Our technology automates and inegrate end to end claim settlement
            process.
            <br />
            Empowering the Aged Care Industry
          </p>
        </div>
       
     
        </div>
     <div  style={{textAlign:"center"}}>
        <Tabs  defaultActiveKey="1">
    <Tabs.TabPane tab="Unified Platform" key="1">
   <div className="unified_page_1">
    <img style={{marginBottom:"5rem"}}
             className="flowchart-logo"
            src={unified_1}
              alt="logo"  
        />
         <img  style={{marginBottom:"5rem"}}
             className="flowchart-logo"
            src={unified_2}
              alt="logo"  
        />
         <img  style={{marginBottom:"5rem"}}
             className="flowchart-logo"
            src={unified_3}
              alt="logo"  
        />
        </div>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Buyer Experience" key="2">
    <div className="home_footer_2">
              <div 
              style={{ maxWidth: "37rem" }}
              >
                <h1 style={{ fontSize: "21px",fontWeight:700 }}>
                  BUYER EXPERIENCE
                </h1>
                <p style={{ fontSize: "16px", maxWidth: "35rem" }}>
                Care Commerce is a platform streamlining business processes through 
intelligent automation.  
                </p>
            
                <button 
                style={{borderRadius:"10px",
                fontWeight:"bold",color:"white",
                backgroundColor:"#01B187",borderWidth:"0px",
                paddingLeft:"20px",paddingRight:"20px"
                }} 
                onClick={() => history("/buyerexp")}>
                  View
                </button>
               
                
               
              </div>
              <img className="unified-logo" src={buyer_exp} alt="logo" />
            </div>
    {/* <img
             className="flowchart-logo"
            src={flowchart2}
              alt="logo"  
        /> */}
    </Tabs.TabPane>
    <Tabs.TabPane tab="Payment" key="3">
    <div className="home_footer_2">
              <div 
              style={{ maxWidth: "37rem" }}
              >
                <h1 style={{ fontSize: "21px",fontWeight:700 }}>
                 Payment
                </h1>
                <p style={{ fontSize: "16px", maxWidth: "35rem" }}>
                Care Commerce is a platform streamlining business processes through 
intelligent automation.  
                </p>
                <button 
                  style={{borderRadius:"10px",
                  fontWeight:"bold",color:"white",
                  backgroundColor:"#01B187",borderWidth:"0px",
                  paddingLeft:"20px",paddingRight:"20px"
                  }} 
                
                onClick={() => history("/payment")}>
                  View
                </button>
                
               
              </div>
              <img className="unified-logo" src={flowchart3} alt="logo" />
            </div>
    {/* <img
             className="flowchart-logo"
            src={flowchart3}
              alt="logo"  
        /> */}
    </Tabs.TabPane>
    <Tabs.TabPane tab="Delivery" key="4">
    <img
             className="flowchart-logo"
            src={flowchart3}
              alt="logo"  
        />
    </Tabs.TabPane>
  </Tabs>
  </div>
      
    </>
  );
}
export default CarepageFooterTwo;
