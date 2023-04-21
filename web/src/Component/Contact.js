import React from "react";
import aboutbanner from "../Images/aboutusbanner.png";
import location from "../Images/fmd_good 1.png";
import phone from "../Images/call 1.png";
import email from "../Images/email 1.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="contact-banner">
        <h3 className="top-contact-header">Contact Us</h3>

        {/* <img src={aboutbanner} alt="image" width="100%" /> */}
      </div>
      {/* <div className="centered">
        
      </div> */}
      <div className="container">
        <ContactForm />

       
      </div>

   
      <div class="container">
<div className="contain">
<div class="col">
<div className="first-table">
                <img src={location} alt="location" />
                <span className="contact-text">Address</span>
                <br />
                <span>
                  40 W Cochran St. Suite 212,
                  <br />
                  Simi Valley,
                  <br />
                  CA 93065,
                  <br />
                  United States
                </span>
              </div>
</div>
  <div class="col">
  <div className="contact-last-two ">
              <img src={phone} alt="location" />
              <span className="contact-text">Telephone</span>
              <p>+1 (805) 523 1085</p>
            </div>
  </div>
  <div class="col">
  <div className="col-lg-4 contact-last-three ">
            <div className="contact-last-three ">
              <img src={email} alt="location" />
              <span className="contact-text">Email</span>
              <br />
              <span>sales@keysoftwareinc.com support@keysoftwareinc.com</span>
            </div>
          </div>
  </div>
</div>
</div>
    </div>
  );
};

export default Contact;
