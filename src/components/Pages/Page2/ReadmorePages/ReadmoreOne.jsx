import React from "react";
import Navbar from "../../../Navbar";
import readone from "../../../../Logos/footer_logo/readone.svg";
import invoice from "../../../../Logos/footer_logo/invoice.svg"
import "../../../../Footer.css";
import tree from "../../../../Logos/footer_logo/tree.svg";

function ReadmoreOne() {
  return (
    <>
      <div style={{marginTop:"57px"}}>
        <img className="readmore-container" src={readone} />
        <p  className="readone-head">Invoice the Business Process  <br/> Through Intelligent Automation.</p>
        <p  className="readone-content">
          Our AI technology can read and understand an invoice<br/> 
          at a human level can also be made to do the same <br/>
          work many times faster than a human.The neural<br/>
           network recognises and works with invoices which can <br/>
           turn hunderds of hours of tedious work into a few <br/>
           seconds or minutes of computer processing time. OCR <br/>
           for invoice processing and scanning intelligently<br/>
            extracts data from docuents.
        </p>
      </div>
      {/* <img src={tree}/> */}
      <div className="readmore-tech">
    
        <h1 className="tech-head">Technology</h1>
        <p className="tech-content"> Our technology automates and inegrate end to end claim settlement process.<br/>
Empowering the Aged Care Industry</p>
<div className="tech-cards">
    <div className="tech-box">
        <div className="tech-title">
        <img
             className="tech-logo"
            src={invoice}
              alt="logo"  
        />
            <p className="tech-mainhead">Dummy Title</p>
            
        </div>
        <p className="tech-card-detail">Our Optical character recognition (OCR) technology automates the data extraction
from printed or written invoice from a scanned document or image file receive through email, google drive or dropbox.  Moreover, invoices can be feteched by integrated saleforce, Xero, Myob, Quickbook. Once the invoices are scanned it is converts the text into a machine-readable form to be used for data processing. </p>


    </div>

    <div className="tech-box">
        <div className="tech-title">
        <img
             className="tech-logo"
            src={invoice}
              alt="logo"  
        />
            <p className="tech-mainhead">During data processing the following fields are assessed</p>
            
        </div>
        <p className="tech-card-detail">Our Optical character recognition (OCR) technology automates the data extraction
from printed or written invoice from a scanned document or image file receive through email, google drive or dropbox.  Moreover, invoices can be feteched by integrated saleforce, Xero, Myob, Quickbook. Once the invoices are scanned it is converts the text into a machine-readable form to be used for data processing. </p>


    </div>

    <div className="tech-box">
        <div className="tech-title">
        <img
             className="tech-logo"
            src={invoice}
              alt="logo"  
        />
            <p className="tech-mainhead">Once the Data is proccesed the data is validated to</p>
            
        </div>
        <p className="tech-card-detail">Our Optical character recognition (OCR) technology automates the data extraction
from printed or written invoice from a scanned document or image file receive through email, google drive or dropbox.  Moreover, invoices can be feteched by integrated saleforce, Xero, Myob, Quickbook. Once the invoices are scanned it is converts the text into a machine-readable form to be used for data processing. </p>


    </div>
</div>
      </div>
    </>
  );
}
export default ReadmoreOne;
