import React from "react";
import { Tabs } from "antd";
import home_unified from "../../../Logos/footer_logo/home_unified.svg";
import tick from "../../../Logos/footer_logo/tick.svg";
import build_logo from "../../../Logos/footer_logo/build_logo.svg";
import "../../../Footer.css";
import {useNavigate, useLocation  } from "react-router-dom";

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
                <p style={{ fontSize: "16px", maxWidth: "35rem" }}>
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
                    <img style={{ marginRight: "7px" }} src={tick} alt="logo" />
                    <div>
                      <p>Provider</p>
                    </div>
                  </button>
                  <button className="home_footer2_list">
                    <img style={{ marginRight: "7px" }} src={tick} alt="logo" />
                    <div>
                      <p>Supplier</p>
                    </div>
                  </button>
                  <button className="home_footer2_list">
                    <img style={{ marginRight: "7px" }} src={tick} alt="logo" />
                    <div>
                      <p>Recipent</p>
                    </div>
                  </button>
                  <button className="home_footer2_list">
                    <img style={{ marginRight: "7px" }} src={tick} alt="logo" />
                    <div>
                      <p>Bank</p>
                    </div>
                  </button>
                  <button className="home_footer2_list">
                    <img style={{ marginRight: "7px" }} src={tick} alt="logo" />
                    <div>
                      <p>Government</p>
                    </div>
                  </button>
                </div>
               <div>
                <button className="claim_button">Start with Claims</button>
                </div>
              </div>
              <img className="unified-logo" src={home_unified} alt="logo" />
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
              <img className="unified-logo" src={build_logo} alt="logo" />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="How does it work" key="3">
            Content of Tab Pane 3
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
