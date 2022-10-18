import React from "react";
import { Tabs } from "antd";
import journeyline from "../../../Logos/footer_logo/journeyline.svg";
// import tick from "../../../Logos/footer_logo/tick.svg";
// import build_logo from "../../../Logos/footer_logo/build_logo.svg";
import features from "../../../Logos/footer_logo/features.svg";
import provider from "../../../Logos/footer_logo/provider.svg";
import supplier from "../../../Logos/footer_logo/supplier.svg";
import recepient from "../../../Logos/footer_logo/recepient.svg";
import bank from "../../../Logos/footer_logo/bank.svg";
import government from "../../../Logos/footer_logo/government.svg";
import "../../../Footer.css";
import manage_journey from '../../../Logos/footer_logo/manage_journey.svg'
// import {useNavigate, useLocation  } from "react-router-dom";
import read_cont_1 from "../../../Logos/ReadmoreImages/readContents/read_cont_1.svg"
import read_cont_2 from "../../../Logos/ReadmoreImages/readContents/read_cont_2.svg"
import read_cont_3 from "../../../Logos/ReadmoreImages/readContents/read_cont_3.svg"
import integrate from "../../../Logos/footerTabsSvg/integrate.svg"
import manage from "../../../Logos/footerTabsSvg/manage.svg"
import workflow_1 from "../../../Logos/footerTabsSvg/workflow_1.svg"
import workflow_2 from "../../../Logos/footerTabsSvg/workflow_2.svg"
import workflow_3  from "../../../Logos/footerTabsSvg/workflow_3.svg"

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
          <Tabs.TabPane tab="Features you Love" key="2">
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
          <Tabs.TabPane tab="Start your Journey" key="3">
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
          <Tabs.TabPane tab="Manage your Journey" key="4">
          <div className="home_footer_2">
              <div 
            
              >
                <h1 style={{ fontSize: "21px" }}>
                How we Manage your Journey
                </h1>
                <p style={{ 
                  fontSize: "13px",
                  //  maxWidth: "35rem"
                    }}>
                 As your customers change how they want to access your products and services, you have to evolve how you do business.<br/>
Learn more about how our leading solutions have helped many of the world’s most innovative Aged care businesses succeed.
                </p>
                <div className="home_footer2_container">
                <img className="read_flow_image" src={manage_journey} alt="" />
                
                </div>
                <div className="readmore-tech" style={{marginTop:"3rem"}}>
      
                  </div>
      <div className="tech-cards" style={{justifyContent:"center",flexWrap:"wrap "}}>
        <div className="tech-box">
          <img className="tech-logo" src={workflow_1} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Automate workflow 
management</p>
          </div>
          <p className="tech-card-detail">
          Automates every touchpoint from invoice<br/> processing, to claim settlement, to making <br/>payment to supplier.
          </p>
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={workflow_2} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Integrate</p>
          </div>
          <p className="tech-card-detail">
          Aged care providers can use care commerce as a standalone cloud-based platform to integrate with own company’s software.

          </p>
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={read_cont_3} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Manage</p>
          </div>
          <p className="tech-card-detail">
          Manage the aged care persons service requests. <br/>

Monitor claims tracking process from start to finish <br/>

Empower your supplier and care managers to make better decision and manage claims more effectively.
          </p>
        </div>
      </div>
      <div className="care-page-footer">
      <h1>As a Supplier</h1>
        <p>
        As your customers change how they want to access your products and services, you have to evolve how you do business.<br/>
Learn more about how our leading solutions have helped many of the world’s most innovative Aged care businesses succeed.
            </p>

            <div
            className="tech-box-large"
            style={{
              maxWidth: "60rem",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent:"center"
            }}
          >
            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={manage_journey}
              alt="logo"
            />
       <div>
            <div className="tech-title2" style={{ width: "22rem" }}>
             <div style={{display:"flex"}}>
             <img
             
              style={{ width: "3rem",marginRight:'10px' }}
              src={integrate}
              alt="logo"
            />
              <p className="tech-mainhead">Integrate</p>
              </div>

              <p className="tech-card-detail">
              Aged care suppliers can use care commerce as a standalone 
cloud-based platform to integrate with providers for end to end 
payment.
              </p>
            </div>
            <div className="tech-title2" style={{ width: "22rem" }}>
             <div style={{display:"flex"}}>
             <img
             
              style={{ width: "3rem",marginRight:'10px' }}
              src={manage}
              alt="logo"
            />
              <p className="tech-mainhead">Manage</p>
              </div>

              <p className="tech-card-detail">
              Send invoice and receive payment as well as payment statement
.<br/> <br/>

Connect with provider and clients and view their relationshship
.<br/> <br/>

View and search the basic information of aged care persons/ 
providers/ services.
              </p>
            </div>
            </div>
          </div>



        </div>
        <div className="care-page-footer" style={{backgroundColor:"white"}}>
      <h1>As an aged care person</h1>
        <p>
        As your customers change how they want to access your products and services, you have to evolve how you do business.<br/>
Learn more about how our leading solutions have helped many of the world’s most innovative Aged care businesses succeed.
            </p>

            <div
            className="tech-box-large"
            style={{
              maxWidth: "60rem",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent:"center"
            }}
          >
        
       <div>
            <div className="tech-title2" style={{ width: "22rem" }}>
             <div style={{display:"flex"}}>
             <img
             
              style={{ width: "3rem",marginRight:'10px' }}
              src={integrate}
              alt="logo"
            />
              <p className="tech-mainhead">Integrate</p>
              </div>

              <p className="tech-card-detail">
              Aged care suppliers can use care commerce as a standalone 
cloud-based platform to integrate with providers for end to end 
payment.
              </p>
            </div>
            <div className="tech-title2" style={{ width: "22rem" }}>
             <div style={{display:"flex"}}>
             <img
             
              style={{ width: "3rem",marginRight:'10px' }}
              src={manage}
              alt="logo"
            />
              <p className="tech-mainhead">Manage</p>
              </div>

              <p className="tech-card-detail">
              Aged care persons can view the process of invoice, claim, and 
payment with the interface
              </p>
            </div>
            <div className="tech-title2" style={{ width: "22rem" }}>
             <div style={{display:"flex"}}>
             <img
             
              style={{ width: "3rem",marginRight:'10px' }}
              src={manage}
              alt="logo"
            />
              <p className="tech-mainhead">Manage</p>
              </div>

              <p className="tech-card-detail">
              Aged care persons can view the process of invoice, claim, and 
payment with the interface
              </p>
            </div>
            </div>
            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={manage_journey}
              alt="logo"
            />
          </div>



        </div>
              </div>
              
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="How we Build" key="5">
            Content of Tab Pane 4
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}
export default CarepageHomeFooterTwo;
