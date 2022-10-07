import React from "react";
import { Tabs } from 'antd';
import flowchart from "../..//Logos/footer_logo/flowchart.svg"
import flowchart2 from "../..//Logos/footer_logo/flowchart2.svg"
import flowchart3 from "../..//Logos/footer_logo/flowchart3.svg"
import "../../Footer.css";
function CarepageFooterTwo() {
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
    <img
             className="flowchart-logo"
            src={flowchart}
              alt="logo"  
        />
    </Tabs.TabPane>
    <Tabs.TabPane tab="How its build" key="2">
    <img
             className="flowchart-logo"
            src={flowchart2}
              alt="logo"  
        />
    </Tabs.TabPane>
    <Tabs.TabPane tab="How does it work" key="3">
    <img
             className="flowchart-logo"
            src={flowchart3}
              alt="logo"  
        />
    </Tabs.TabPane>
    <Tabs.TabPane tab="Unique Proposition" key="4">
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
