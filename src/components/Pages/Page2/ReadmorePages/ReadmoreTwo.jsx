import React from "react";
// import Navbar from "../../../Navbar";
import readone from "../../../../Logos/footer_logo/readone.svg";
// import invoice from "../../../../Logos/footer_logo/invoice.svg";
// import read_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_cont_1.svg";
import read_cont_2 from "../../../../Logos/ReadmoreImages/readContents/read_cont_2.svg";
import read_cont_3 from "../../../../Logos/ReadmoreImages/readContents/read_cont_3.svg";

import read_cont_21 from "../../../../Logos/ReadmoreImages/readContents/read_cont_21.svg";
import read_cont_22 from "../../../../Logos/ReadmoreImages/readContents/read_cont_22.svg";
import read_cont_23 from "../../../../Logos/ReadmoreImages/readContents/read_cont_23.svg";
// import read_large_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_large_cont_1.svg";
import claim from '../../../../Logos/footerTabsSvg/claim.svg'
import dispatch from '../../../../Logos/footerTabsSvg/dispatch.svg'
import government from '../../../../Logos/footerTabsSvg/government.svg'
import "../../../../Footer.css";
import read_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_cont_1.svg"
import read_large_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_large_cont_1.svg"
import readmore_flow from "../../../../Logos/ReadmoreImages/readmore_flow.svg";
// import tree from "../../../../Logos/footer_logo/tree.svg";
// import { isMobileDevice } from "../../../IsMobile";
function ReadmoreTwo() {
  return (
    <>
      <img className="readmore-container" src={readone} alt="" />
      <div 
       className="read_cards"
    //   style={{ display: "flex", marginTop: "6rem", flexWrap: "wrap" }}
      >
        <div>
          <img className="read_flow_image" src={readmore_flow} alt="" />
        </div>

        <div>
          <p className="readone-head">
            Claim Process <br /> Through Intelligent Automation.
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
          <img className="tech-logo" src={read_cont_21} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Claim to B2G</p>
          </div>
          <p className="tech-card-detail">
          Once the invoice is validated, Colakin Care will <br/>
           extract the key entries in the invoice and sent<br/>
            the claim to B2G (Aged Care Web Service) <br/>behalf to aged care providers.
          </p>
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={dispatch} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Dispatch payment</p>
          </div>
          <p className="tech-card-detail">
          After providers receive the payment approved<br/> by the Government, Colakin Care will dispatch<br/>
           the payment to suppliers behalf to aged care<br/>
            providers. Both suppliers and providers can<br/> view the process.
          </p>
        </div>

        {/* <div className="tech-box">
          <img className="tech-logo" src={read_cont_23} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Dummy Title</p>
          </div>
          <p className="tech-card-detail">
            Our Optical character recognition (OCR) technology automates the
            data extraction from printed or written invoice from a scanned
            document or image file receive through email, google drive or
            dropbox. Moreover, invoices can be feteched by integrated saleforce,
            Xero, Myob, Quickbook. Once the invoices are scanned it is converts
            the text into a machine-readable form to be used for data
            processing.{" "}
          </p>
        </div> */}
      </div>
      {/* <div className="readmore-tech" style={{marginTop:"3rem"}}>
        <h1 className="tech-head">As a Provider</h1>
        <p className="tech-content">
          {" "}
          Our technology automates and inegrate end to end claim settlement
          process.
          <br />
          Empowering the Aged Care Industry
        </p>
      </div> */}
      <div className="readmore-tech_2_bg">
        <h1 className="tech-head">Aged Care Web Service</h1>
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
              src={read_large_cont_1}
              alt="logo"
            />
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Send Claim to Government</p>

              <p className="tech-card-detail">
              The claim will be sent to the Goverment <br/>
              through B2G (Aged Care Web Service). The<br/> Government will be notified when receive new<br/> claims.


              </p>
            </div>
          </div>
        
          {/* <div
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
              src={read_large_cont_3}
              alt="logo"
            />
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Dummy Title</p>

              <p className="tech-card-detail">
                Our Optical character recognition (OCR) technology automates the
                data extraction from printed or written invoice from a scanned
                document or image file receive through email, google drive or
                dropbox. Moreover, invoices can be feteched by integrated
                saleforce, Xero, Myob, Quickbook. Once the invoices are scanned
                it is converts the text into a machine-readable form to be used
                for data processing.{" "}
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="readmore-tech_2">
        <h1 className="tech-head">Government</h1>
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
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Government Approval</p>

              <p className="tech-card-detail">
              Once claim are approved by the Government,<br/>  aged care providers will be notified once their<br/>
               claim is approved or rejected, and receive <br/>their payment.

              </p>
            </div>

            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={government}
              alt="logo"
            />
          </div>
          {/* <div
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
              src={read_large_cont_3}
              alt="logo"
            />
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Dummy Title</p>

              <p className="tech-card-detail">
                Our Optical character recognition (OCR) technology automates the
                data extraction from printed or written invoice from a scanned
                document or image file receive through email, google drive or
                dropbox. Moreover, invoices can be feteched by integrated
                saleforce, Xero, Myob, Quickbook. Once the invoices are scanned
                it is converts the text into a machine-readable form to be used
                for data processing.{" "}
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="tech-cards">
        <div className="tech-box">
          <img className="tech-logo" src={read_cont_21} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Dummy Title</p>
          </div>
          <p className="tech-card-detail">
            Our Optical character recognition (OCR) technology automates the
            data extraction from printed or written invoice from a scanned
            document or image file receive through email, google drive or
            dropbox. Moreover, invoices can be feteched by integrated saleforce,
            Xero, Myob, Quickbook. Once the invoices are scanned it is converts
            the text into a machine-readable form to be used for data
            processing.{" "}
          </p>
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={read_cont_2} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Dummy Title</p>
          </div>
          <p className="tech-card-detail">
            Our Optical character recognition (OCR) technology automates the
            data extraction from printed or written invoice from a scanned
            document or image file receive through email, google drive or
            dropbox. Moreover, invoices can be feteched by integrated saleforce,
            Xero, Myob, Quickbook. Once the invoices are scanned it is converts
            the text into a machine-readable form to be used for data
            processing.{" "}
          </p>
        </div>

        <div className="tech-box">
          <img className="tech-logo" src={read_cont_3} alt="logo" />
          <div className="tech-title">
            <p className="tech-mainhead">Dummy Title</p>
          </div>
          <p className="tech-card-detail">
            Our Optical character recognition (OCR) technology automates the
            data extraction from printed or written invoice from a scanned
            document or image file receive through email, google drive or
            dropbox. Moreover, invoices can be feteched by integrated saleforce,
            Xero, Myob, Quickbook. Once the invoices are scanned it is converts
            the text into a machine-readable form to be used for data
            processing.{" "}
          </p>
        </div>
      </div> */}
      {/* <div className="readmore-tech_2">
        <h1 className="tech-head">As a Supplier</h1>
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
              src={read_large_cont_1}
              alt="logo"
            />
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Dummy Title</p>

              <p className="tech-card-detail">
                Our Optical character recognition (OCR) technology automates the
                data extraction from printed or written invoice from a scanned
                document or image file receive through email, google drive or
                dropbox. Moreover, invoices can be feteched by integrated
                saleforce, Xero, Myob, Quickbook. Once the invoices are scanned
                it is converts the text into a machine-readable form to be used
                for data processing.{" "}
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
              <p className="tech-mainhead">Dummy Title</p>

              <p className="tech-card-detail">
                Our Optical character recognition (OCR) technology automates the
                data extraction from printed or written invoice from a scanned
                document or image file receive through email, google drive or
                dropbox. Moreover, invoices can be feteched by integrated
                saleforce, Xero, Myob, Quickbook. Once the invoices are scanned
                it is converts the text into a machine-readable form to be used
                for data processing.{" "}
              </p>
            </div>

            <img
              className="tech-logo"
              style={{ width: "22rem" }}
              src={read_cont_1}
              alt="logo"
            />
          </div>
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
              src={read_large_cont_3}
              alt="logo"
            />
            <div className="tech-title2" style={{ width: "22rem" }}>
              <p className="tech-mainhead">Dummy Title</p>

              <p className="tech-card-detail">
                Our Optical character recognition (OCR) technology automates the
                data extraction from printed or written invoice from a scanned
                document or image file receive through email, google drive or
                dropbox. Moreover, invoices can be feteched by integrated
                saleforce, Xero, Myob, Quickbook. Once the invoices are scanned
                it is converts the text into a machine-readable form to be used
                for data processing.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      */}
      
    </>
  );
}
export default ReadmoreTwo;
