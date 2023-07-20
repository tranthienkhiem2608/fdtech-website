import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>Home</p>
            </a>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Products</p>
            </a>
            <a href="">
              <p>Services</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>Home</p>
            </a>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Products</p>
            </a>
            <a href="">
              <p>Services</p>
            </a>
          </div>

          <div className="sb_footer-links_div">
            <h4>For Business</h4>
            <a href="">
              <p>Home</p>
            </a>
            <a href="">
              <p>About Us</p>
            </a>
            <a href="">
              <p>Products</p>
            </a>
            <a href="">
              <p>Services</p>
            </a>
          </div>

          {/* <div className="sb_footer-links-div">
            <h4>Coming soon on</h4>
            <p>
              <img src={fb} alt="" />
            </p>
            <p>
              <img src={twitter} alt="" />
            </p>
            <p>
              <img src={linkedin} alt="" />
            </p>
            <p>
              <img src={insta} alt="" />
            </p>
          </div> */}
        </div>
      </div>

      <hr></hr> 
      
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
          <p>
        @{new Date().getFullYear()} CodeInn. All right reserved.

          </p>
        </div>
        <div className="sb_footer-below-links">
          <a href="/terms">
            <div>
              <p>Terms & Conditions</p>
            </div>
          </a>
          <a href="/privacy">
            <div>
              <p>Privacy</p>
            </div>
          </a>
          <a href="/security">
            <div>
              <p>Security</p>
            </div>
          </a>
          <a href="/cookie">
            <div>
              <p>Cookie Declaration</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
