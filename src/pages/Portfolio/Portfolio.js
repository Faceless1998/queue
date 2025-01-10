import React from "react";
import "./Portfolio.css";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import IMG1 from "./../../assets/Ellipse 1.png";
export const Portfolio = () => {
  return (
    <div>
      <div className="portimage">
        <div className="staff-member">
          <div className="photo">
            <img src={IMG1} alt="member" />
          </div>

          <div className="username">
            <div className="staffname">NAME WILL BE HERE</div>
            <div className="line"></div>
          </div>
          <div className="position">PROJECT MANAGER</div>
        </div>

        <div className="contact">
          <div className="title">Follow On</div>
          <div className="social">
            <CiInstagram />
            <CiFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};
