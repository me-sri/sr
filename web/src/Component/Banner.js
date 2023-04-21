import React, { useState } from "react";
// import images......
import banner from "../Images/Banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
 

  return (
    <div>

      {/* ..........  navbar section    */}
      
{/* .......Banner  Page ........ */}
      <div className="container-fluid  banner-image">
        <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h1 className="banner-title">
                {" "}
                Leverage on our IT <br />
                expertise to solve your <br /> business problems
              </h1>
              <p className="mt-3 banner-phara">
                We create value and build confidence!
              </p>
              <button className="banner-button">Our services</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src={banner}
                alt="banner"
                width="100%"
                className="small-device"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
