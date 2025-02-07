import Carousel from "../includes/Carousel";
import Navbar from "../includes/Navbar";
import "../styles/navbar.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import React from "react";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container py-5">
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-4 border rounded"
          style={{ backgroundColor: "rgb(243, 243, 243)", minHeight: "140px" }}
        >
          {/* Fast and Free Delivery */}
          <div className="col mt-4">
            <div className="d-flex align-items-start p-2 h-100">
              <div className="me-3">
                <LocalShippingOutlinedIcon
                  fontSize="large"
                  className="text-dark nav-icons"
                />
              </div>
              <div className="text-start">
                <h5 className="mb-2" style={{ fontFamily: "Roboto", fontWeight: "600" }}>
                  Fast and Free Delivery
                </h5>
                <p className="mb-0 text-secondary">
                  Free delivery for all orders over Rs 1199
                </p>
              </div>
            </div>
          </div>

          {/* 24/7 Customer Support */}
          <div className="col mt-4">
            <div className="d-flex align-items-start p-2 h-100">
              <div className="me-3">
                <SupportAgentOutlinedIcon fontSize="large" className="text-dark nav-icons" />
              </div>
              <div className="text-start">
                <h5 className="mb-2" style={{ fontFamily: "Roboto", fontWeight: "600" }}>
                  24/7 Customer Support
                </h5>
                <p className="mb-0 text-secondary">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="col mt-4">
            <div className="d-flex align-items-start p-2 h-100">
              <div className="me-3">
                <VerifiedUserOutlinedIcon fontSize="large" className="text-dark nav-icons" />
              </div>
              <div className="text-start">
                <h5 className="mb-2" style={{ fontFamily: "Roboto", fontWeight: "600" }}>
                  Money Back Guarantee
                </h5>
                <p className="mb-0 text-secondary">We return money within 07 days</p>
              </div>
            </div>
          </div>

          {/* Member Gifts */}
          <div className="col mt-4">
            <div className="d-flex align-items-start p-2 h-100">
              <div className="me-3">
                <CardGiftcardOutlinedIcon fontSize="large" className="text-dark nav-icons" />
              </div>
              <div className="text-start">
                <h5 className="mb-2" style={{ fontFamily: "Roboto", fontWeight: "600" }}>
                  Member Gifts
                </h5>
                <p className="mb-0 text-secondary">Discount coupons weekends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
