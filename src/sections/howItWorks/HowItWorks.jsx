import React from "react";

import "./howItWorks.css";

import howItWorkLogo from "../../assets/logos/howItWorks.png";
import howItWorksDroneImage from "../../assets/images/howItWorksDroneImage.png";

const HowItWorks = () => {
  return (
    <div className="how-it-works-section d-flex flex-column align-items-center">
      <h1 className="section-title mb-5">How it Works</h1>

      <div className="how-it-works-content d-flex ">
        <div className="how-it-works-terms d-flex flex-column justify-content-between mt-5 mb-5 ">
          <div className="how-it-works-terms-part d-flex flex-row">
            <div className="terms-details">
              <h3 className="terms-title">How to use battery</h3>
              <p className="terms-description">
                Capture stunning aerial footage with the DJI Mini 3 Pro:
                compact.
              </p>
            </div>
            <div className="terms-logo">
              <img src={howItWorkLogo} alt="" />
            </div>
          </div>

          <div className="how-it-works-terms-part d-flex flex-row">
            <div className="terms-details">
              <h3 className="terms-title">How to use battery</h3>
              <p className="terms-description">
                Capture stunning aerial footage with the DJI Mini 3 Pro:
                compact.
              </p>
            </div>
            <div className="terms-logo">
              <img src={howItWorkLogo} alt="" />
            </div>
          </div>

          <div className="how-it-works-terms-part d-flex flex-row">
            <div className="terms-details">
              <h3 className="terms-title">How to use battery</h3>
              <p className="terms-description">
                Capture stunning aerial footage with the DJI Mini 3 Pro:
                compact.
              </p>
            </div>
            <div className="terms-logo">
              <img src={howItWorkLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="how-it-works-image">
          <img src={howItWorksDroneImage} alt="" />
        </div>
        <div className="how-it-works-terms how-it-works-terms-right d-flex flex-column justify-content-between mt-5 mb-5">
          <div className="how-it-works-terms-part d-flex flex-row">
            <div className="terms-logo">
              <img src={howItWorkLogo} alt="" />
            </div>
            <div className="terms-details">
              <h3 className="terms-title">How to use battery</h3>
              <p className="terms-description">
                Capture stunning aerial footage with the DJI Mini 3 Pro:
                compact.
              </p>
            </div>
          </div>
          <div className="how-it-works-terms-part d-flex flex-row">
            <div className="terms-logo">
              <img src={howItWorkLogo} alt="" />
            </div>
            <div className="terms-details">
              <h3 className="terms-title">How to use battery</h3>
              <p className="terms-description">
                Capture stunning aerial footage with the DJI Mini 3 Pro:
                compact.
              </p>
            </div>
          </div>
          <div className="how-it-works-terms-part d-flex flex-row">
            <div className="terms-logo">
              <img src={howItWorkLogo} alt="" />
            </div>
            <div className="terms-details">
              <h3 className="terms-title">How to use battery</h3>
              <p className="terms-description">
                Capture stunning aerial footage with the DJI Mini 3 Pro:
                compact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
