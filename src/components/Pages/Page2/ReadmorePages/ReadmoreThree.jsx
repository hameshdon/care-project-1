import React from "react";
// import Navbar from "../../../Navbar";
import readone from "../../../../Logos/footer_logo/readone.svg";
import invoice from "../../../../Logos/footer_logo/invoice.svg";
import read_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_cont_1.svg";
import read_cont_2 from "../../../../Logos/ReadmoreImages/readContents/read_cont_2.svg";
import read_cont_3 from "../../../../Logos/ReadmoreImages/readContents/read_cont_3.svg";


import read_large_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_large_cont_1.svg"
import request from '../../../../Logos/footerTabsSvg/request.svg'
import request_2 from '../../../../Logos/footerTabsSvg/request_2.svg'
import request_3 from '../../../../Logos/footerTabsSvg/request_3.svg'
import receive1 from '../../../../Logos/footerTabsSvg/receive1.svg'
import receive2 from '../../../../Logos/footerTabsSvg/receive2.svg'
import receive11 from '../../../../Logos/footerTabsSvg/receive11.svg'
import receive12 from '../../../../Logos/footerTabsSvg/receive12.svg'
import receive_pay1 from '../../../../Logos/footerTabsSvg/receive_pay1.svg'
import receive_pay2 from '../../../../Logos/footerTabsSvg/receive_pay2.svg'
import read3_profile_img from "../../../../Logos/ReadmoreImages/readContents/read3_profile_img.svg";
// import read_large_cont_3 from "../../../../Logos/ReadmoreImages/readContents/read_large_cont_3.svg";
import "../../../../Footer.css";
import readmore_flow from "../../../../Logos/ReadmoreImages/readmore_flow.svg";
// import tree from "../../../../Logos/footer_logo/tree.svg";
// import { isMobileDevice } from "../../../IsMobile";
function ReadmoreThree() {
  return (
    <>
      <img className="readmore-container" src={readone} alt="" />
      <div 
       className="read_cards"
      // style={{ display: "flex", marginTop: "6rem", flexWrap: "wrap" }}
      >
        <div>
          <img className="read_flow_image" src={readmore_flow} alt="" />
        </div>

        <div>
          <p className="readone-head">
          Colakin Care
          </p>
          <p className="readone-content">
            Our AI technology can read and understand an invoice
            <br />
            at a human level can also be made to do the same <br />
            work many times faster than a human.The neural
            <br />
            network recognises and works with invoices which can <br />
            turn hunderds of hours of tedious work into a few <br />
            seconds or minutes of computer processing time. OCR <br />
            for invoice processing and scanning intelligently
            <br />
            extracts data from docuents.
          </p>
        </div>
      </div>
      <div className="readmore-tech">
        <h1 className="tech-head">Colakin Care</h1>
        <p className="tech-content">
          {" "}
          Our technology automates and inegrate end to end claim settlement
          process.
          <br />
          Empowering the Aged Care Industry
        </p>
      </div>
      <div className="tech-cards">
        <div className="tech-box">
          <img className="tech-logo" src={request} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Request payment from clients</p>
          </div>
          <p className="tech-card-detail">
          Colakin Care will automaticlly check the claim amount  and request payment from clients behalf to providers if the claim amount is less than service amount.

Providers can view the payment status and check payment details through Colakin Care.
          </p>
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={request_2} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Dispatch payment to providers
and suppliers</p>
          </div>
          <p className="tech-card-detail">
          Once receive the payment from clients, Colakin Care will check the payment account and dispatch payment to providers and suppliers according to the rules providers set in the systems. 

Providers and suppliers can check the payment details via Colakin Care.
          </p>ssss
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={request_3} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Payment Statement for everyone</p>
          </div>
          <p className="tech-card-detail">
          Users can choose the frequency of receiving payment statements.

Statement covers the payment details, and everyone can choose the data they would like to view or analysis.
          </p>
        </div>
      </div>
      
      <div className="readmore-tech_2_bg">
        <h1 className="tech-head">As a Aged Care Provider</h1>
        <p className="tech-content">
          {" "}
          Our technology automates and inegrate end to end claim settlement
          process.
          <br />
          Empowering the Aged Care Industry
        </p>
        <div className="tech-cards_2">
          <div
            className="tech-box-large"
            style={{
              maxWidth: "60rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={receive1}
              alt="logo"
            />
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Receive payment</p>

              <p className="tech-card-detail">
              Providers can receive the payment from <br/>
              clients via Colakin Care and check the <br/>
               payment details, such as the payment <br/> amount and time. 
                


              </p>
            </div>
          </div>
          
        
          <div
            className="tech-box-large"
            style={{
              maxWidth: "60rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
          
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Receive payment statement</p>

              <p className="tech-card-detail">
              Providers can choose the frequency of <br/>
              receiving payment statements.<br/><br/>

Payment statement covers the payment <br/>
details, such as the total service time for a<br/>
 speticular client or provider, or monthly payment.
              </p>
            </div>
            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={receive2}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="readmore-tech" style={{marginTop:"2rem"}}>
        <h1 className="tech-head">As a Supplier</h1>
        <p className="tech-content">
          {" "}
          Our technology automates and inegrate end to end claim settlement
          process.
          <br />
          Empowering the Aged Care Industry
        </p>
      </div>
      <div className="tech-cards">
        

        <div className="tech-box">
          <img className="tech-logo" src={receive11} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Receive payment</p>
          </div>
          <p className="tech-card-detail">
          Once receive the payment from clients,<br/> Colakin Care will check the payment account<br/>
           and dispatch payment to suppliers.<br/><br/>

Suppliers can check the payment details via <br/>Colakin Care.
          </p>
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={receive12} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Receive payment statement</p>
          </div>
          <p className="tech-card-detail">
          Suppliers can choose the frequency of <br/>
          receiving payment statements.<br/><br/>

Payment statement covers the payment<br/>
 details, such as the total service time for a<br/>
  speticular client or provider, or monthly<br/> payment.
          </p>
        </div>
      </div>
      <div className="readmore-tech_2_bg">
        <h1 className="tech-head">As a Aged Care Provider</h1>
        <p className="tech-content">
          {" "}
          Our technology automates and inegrate end to end claim settlement
          process.
          <br />
          Empowering the Aged Care Industry
        </p>
        <div className="tech-cards_2">
          <div
            className="tech-box-large"
            style={{
              maxWidth: "60rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={receive_pay1}
              alt="logo"
            />
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Make payment</p>

              <p className="tech-card-detail">
              Colakin Care will automaticlly check the claim<br/> amount  and request payment from clients<br/>
               behalf to providers if the claim amount is less<br/>
                than service amount.<br/><br/>

Aged care persons can pay online for each<br/> service and check the claim amount via<br/> Colakin Care.
                


              </p>
            </div>
          </div>
          
        
          <div
            className="tech-box-large"
            style={{
              maxWidth: "60rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
          
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Receive payment statement</p>

              <p className="tech-card-detail">
              Aged care persons can choose the frequency<br/> of receiving payment statements.<br/><br/>


Payment statement covers the payment<br/>
 details, such as the total service time of a <br/>
 speticular supplier or  provider, or the time of<br/>
  different type services.
              </p>
            </div>
            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={receive_pay2}
              alt="logo"
            />
          </div>
        </div>
      </div>
      {/* <div className="readmore-tech">
        <h1 className="tech-head">Technology</h1>
        <p className="tech-content3">
          {" "}
          Our Optical character recognition (OCR) technology automates the data extraction from printed or written 
          invoice from a scanned document or image file <br/>
          receive through email, google drive or dropbox.  Moreover, invoices can be feteched by integrated saleforce, Xero, Myob, Quickbook. 
          Once the invoices are <br/>
          scanned it is converts the text into a machine-readable form to be used for data processing.  
        </p>
      </div>
     <div style={{textAlign:"center",marginTop:"3rem",marginBottom:"3rem"}}>
      <h1 className="tech-head__2">During data processing the following fields are assessed</h1>
      </div>
      <div className="tech-cards_3">
     
        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Owed</p>
          </div>
          <p className="tech-card-detail3">
           The total amount owed
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Name and Address</p>
          </div>
          <p className="tech-card-detail3">
          Who is owed,
including name and address.
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Payment Identifiers</p>
          </div>
          <p className="tech-card-detail3">
          Any payment identifiers, such as accounts or invoice numbers, that should be included with
the payment.
          </p>
        </div>
        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Supplier</p>
          </div>
          <p className="tech-card-detail3">
          Supplier who owns amount
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Provider</p>
          </div>
          <p className="tech-card-detail3">
          Services provided.
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Receipent</p>
          </div>
          <p className="tech-card-detail3">
          Verify the receipent eligibility criteria for particular service.
          </p>
        </div>
      </div>

      <div style={{textAlign:"center",marginTop:"3rem",marginBottom:"3rem"}}>
      <h1 className="tech-head__2">Once the Data is proccesed the data is validated to</h1>
      </div>
      <div className="tech-cards_3">
     
        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Allocate</p>
          </div>
          <p className="tech-card-detail3">
          Interrogate the entire supply chain for accuracy to ensure each charge has been correctly allocated.
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Errors</p>
          </div>
          <p className="tech-card-detail3">
          Identify errors.
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Receipent</p>
          </div>
          <p className="tech-card-detail3">
          Verify the receipent eligibility criteria for particular service.
          </p>
        </div>
        
      </div>

      <div style={{textAlign:"center",marginTop:"3rem",marginBottom:"3rem"}}>
      <h1 className="tech-head__2">Our technology automates and inegrate end to end claim settlement process.
Empowering the Aged Care Industry</h1>
      </div>
      <div className="tech-cards_3">
     
        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Data Entry</p>
          </div>
          <p className="tech-card-detail3">
          Elimination of manual data entry
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Resource</p>
          </div>
          <p className="tech-card-detail3">
          Resource savings due to the ability to process more data faster and with fewer resources.
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Reduction</p>
          </div>
          <p className="tech-card-detail3">
          Error reductions.
          </p>
        </div>
        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Storage Spacer</p>
          </div>
          <p className="tech-card-detail3">
          Reallocation of physical storage space
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Productivity</p>
          </div>
          <p className="tech-card-detail3">
          Improved productivity.
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Dummy Title</p>
          </div>
          <p className="tech-card-detail3">
          Dummy Content
          </p>
        </div>
      </div>

      <div style={{textAlign:"center",marginTop:"3rem",marginBottom:"3rem"}}>
      <h1 className="tech-head__2" style={{fontSize:"16px"}}>Our Optical character recognition (OCR) technology automates the data 
      extraction from printed or written invoice from a scanned document or image file <br/>
      receive through email, google drive or dropbox.  Moreover, invoices can be feteched by 
      integrated saleforce, Xero, Myob, Quickbook. Once the invoices are  <br/>
      scanned it is converts the text
       into a machine-readable form to be used for data processing. 
        </h1>
      </div>
      <div className="tech-cards_3">
     
        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Phase 1</p>
          </div>
          <p className="tech-card-detail3">
          Sent Invoice
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Phase 2</p>
          </div>
          <p className="tech-card-detail3">
          Invoice approved
          </p>
        </div>

        <div className="tech-box_3">
          <img className="tech-logo3" src={read3_profile_img} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead3">Phase 3</p>
          </div>
          <p className="tech-card-detail3">
          Invoice validation
          </p>
        </div>
        
      </div> */}
     
      
      
    </>
  );
}
export default ReadmoreThree;
