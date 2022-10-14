import React from "react";
import { Tabs } from "antd";
import journeyline from "../../../Logos/footer_logo/journeyline.svg";
import tick from "../../../Logos/footer_logo/tick.svg";
import build_logo from "../../../Logos/footer_logo/build_logo.svg";
import features from "../../../Logos/footer_logo/features.svg";
import provider from "../../../Logos/footer_logo/provider.svg";
import supplier from "../../../Logos/footer_logo/supplier.svg";
import recepient from "../../../Logos/footer_logo/recepient.svg";
import bank from "../../../Logos/footer_logo/bank.svg";
import government from "../../../Logos/footer_logo/government.svg";
import "../../../Footer.css";
// import {useNavigate, useLocation  } from "react-router-dom";

function CarepageHomeFooterTwo() {
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
      <div style={{ textAlign: "center" }}>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Unified Platform" key="1">
            <div className="home_footer_2">
              <div 
              style={{ maxWidth: "37rem" }}
              >
                <h1 style={{ fontSize: "21px" }}>
                  A fully integrated End-to-End Software Solution for Providers
                </h1>
                <p style={{ 
                  fontSize: "16px",
                   maxWidth: "35rem"
                    }}>
                  Care Commerce is integrated platform which streamline payment
                  and claim settlement process, unlock your platform's growth,
                  and create a interactive customer experience. The platform
                  enables access partners management and provides unified
                  payment docking solutions to them. With this integration aged
                  providers can lean on the community to create more value and
                  drive innovation faster.
                </p>
                <div className="home_footer2_container">
                  <button className="home_footer2_list">
                    <img style={{ marginRight: "7px",maxWidth:"9rem" }} src={provider} alt="logo" />
                    
                  </button>
                  <button className="home_footer2_list">
                  <img style={{ marginRight: "7px",maxWidth:"9rem" }} src={supplier} alt="logo" />
                    
                  
                  </button>
                  <button className="home_footer2_list">
                  <img style={{ marginRight: "7px",maxWidth:"9rem" }} src={recepient} alt="logo" />
                   
                  </button>
                  <button className="home_footer2_list">
                  <img style={{ marginRight: "7px",maxWidth:"9rem" }} src={bank} alt="logo" />
                    
                  </button>
                  <button className="home_footer2_list">
                  <img style={{ marginRight: "7px",maxWidth:"9rem" }} src={government} alt="logo" />
                   
                  </button>
                  {/* <button className="home_footer2_list">
                    <img style={{ marginRight: "7px" }} src={tick} alt="logo" />
                    <div>
                      <p>Government</p>
                    </div>
                  </button> */}
                </div>
               {/* <div>
                <button className="claim_button">Start with Claims</button>
                </div> */}
              </div>
              {/* <img className="unified-logo" src={home_unified} alt="logo" /> */}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="How its build" key="2">
          <div className="home_footer_2">
              <div 
              style={{ maxWidth: "37rem" }}
              >
                <h1 style={{ fontSize: "21px" }}>
                  A fully integrated End-to-End Software Solution for Providers
                </h1>
                <p style={{ fontSize: "16px", maxWidth: "35rem" }}>
                Care Commerce is a platform streamlining business processes through 
intelligent automation.  Our SaaS-based care commerce platform is a 
package of modern tehnologies to provide excellent and automated 
access to new real-time data streams for claims management, settlement 
and resolution and for better personalised and curated product offerings-
delivering impressive customer experience and improved business outcomes.
                </p>
                
               
              </div>
              <img className="unified-logo" src={features} alt="logo" />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="How does it work" key="3">
          <div className="home_footer_2">
              <div 
              style={{ maxWidth: "37rem" }}
              >
                <h1 style={{ fontSize: "21px" }}>
                  A fully integrated End-to-End Software Solution for Providers
                </h1>
                <p style={{ 
                  fontSize: "16px",
                   maxWidth: "35rem"
                    }}>
                 There are key steps to accessing Care Commerce aged care services. Learn more about how to get started.
                </p>
                <div className="home_footer2_container">
              
                <img className="unified-logo" src={journeyline} alt="logo" />
                </div>
              
              </div>
            
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Unique Proposition" key="4">
            Content of Tab Pane 4
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}
export default CarepageHomeFooterTwo;
