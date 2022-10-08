import React from "react";
// import Navbar from "../../../Navbar";
import readone from "../../../../Logos/footer_logo/readone.svg";
// eslint-disable-next-line
// import invoice from "../../../../Logos/footer_logo/invoice.svg"
import read_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_cont_1.svg"
import read_cont_2 from "../../../../Logos/ReadmoreImages/readContents/read_cont_2.svg"
import read_cont_3 from "../../../../Logos/ReadmoreImages/readContents/read_cont_3.svg"

import read_large_cont_1 from "../../../../Logos/ReadmoreImages/readContents/read_large_cont_1.svg"
import read_large_cont_3 from "../../../../Logos/ReadmoreImages/readContents/read_large_cont_3.svg"
import "../../../../Footer.css";
import readmore_flow from '../../../../Logos/ReadmoreImages/readmore_flow.svg'
// import tree from "../../../../Logos/footer_logo/tree.svg";
// eslint-disable-next-line
// import { isMobileDevice } from "../../../IsMobile";
function ReadmoreOne() {
  return (
    <>
      <img className="readmore-container" src={readone} alt="" />
      <div style={{ display: "flex", marginTop: "6rem", flexWrap: "wrap" }}>
        <div>
          <img className="read_flow_image" src={readmore_flow} alt="" />
        </div>

        <div>
          <p className="readone-head">
            Invoice the Business Process <br /> Through Intelligent Automation.
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
        <h1 className="tech-head">As a Provider</h1>
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
          <img className="tech-logo" src={read_cont_1} alt="logo" />
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
      </div>
      <div className="readmore-tech_2">
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
      <div className="readmore-tech" style={{marginTop:"3rem"}}>
        <h1 className="tech-head">As a Provider</h1>
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
          <img className="tech-logo" src={read_cont_1} alt="logo" />
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
      </div>
      
    </>
  );
}
export default ReadmoreOne;
