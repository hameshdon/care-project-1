import React from "react";
// import Navbar from "../../../Navbar";
// import readone from "../../../Logos/footer_logo/readone.svg";
// eslint-disable-next-line
// import invoice from "../../../../Logos/footer_logo/invoice.svg"
import read_cont_1 from "../../../Logos/ReadmoreImages/readContents/read_cont_1.svg"
// import read_cont_2 from "../../../Logos/ReadmoreImages/readContents/read_cont_2.svg"
// import read_cont_3 from "../../../Logos/ReadmoreImages/readContents/read_cont_3.svg"
// import read_cont_4 from "../../../Logos/ReadmoreImages/readContents/read_cont_4.svg"
// import read_cont_5 from "../../../Logos/ReadmoreImages/readContents/read_cont_5.svg"
// import read_cont_6 from "../../../Logos/ReadmoreImages/readContents/read_cont_6.svg"

import read_large_cont_1 from "../../../Logos/ReadmoreImages/readContents/read_large_cont_1.svg"
import read_large_cont_3 from "../../../Logos/ReadmoreImages/readContents/read_large_cont_3.svg"
import "../../../Footer.css";
import readmore_flow from '../../../Logos/ReadmoreImages/readmore_flow.svg'

function BuyerExp() {

  return (
    <>
      {/* <img className="readmore-container" src={readone} alt="" /> */}
      <div 
      className="read_cards"
       style={{ display: "flex", marginTop: "6rem", flexWrap: "wrap" }}
       >
        {/* <div>
          <img className="read_flow_image" src={readmore_flow} alt="" />
        </div> */}

        <div>
          <p className="readone-head" style={{color:"black"}}>
          Buyer Experience
          </p>
          <p className="readone-content"  style={{color:"black"}}>
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
        <div>
          <img className="read_flow_image" src={readmore_flow} alt="" />
        </div>
      </div>
      
     
      <div className="readmore-tech_2">
        <h1 className="tech-head">Buyer Location</h1>
        <p className="tech-content">
          {" "}
          Size corner is the best online shopping site with the best range of deals and products to <br/>
          choose from. It allows use to make purchase based on the buyer location.
          <br />          <br />
          The buyer have the wide range of deals and products to choose from, making it easy to  <br />
          find what the buyer need and want. Takes care buyer to shop from small eCommerce  <br />
          players at a very moderate price.
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
              Vijay wants to buy 500ml of milk, Vijay Opens Size Corner, Searches for the products and Enters his location, Checks the availability of the seller for the particular products. Vijay discovers a lot of sellers, who are ready to deliver him based on the location and product he has entered. Vijay chooses to buy from Muthu, Vijay places order using Size corner by entering the Number of quantity and Confirms it.{" "}
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
              Once Vijay places the order through Size corner, Order details will be sent to Muthu by Care Commerce. Care Commerce will list down the Delivery services available for Vijay's Location. Vijay chooses Dunzo for Delivery service. Mani from Dunzo will deliver the product from Muthu's Shop/ Warehouse to Vijay's Location{" "}
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
              Mani will the Deliver the Product to Vijay. Collects the Payment from Vijay. Mani will deduce the Delivery Charges and settle the Buyer Finder fee for Size Corner , Seller Finder Fee to Care Commerce, and the Product Prize to the Seller Muthu{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
     
    
      
    </>
  );
}
export default BuyerExp;
