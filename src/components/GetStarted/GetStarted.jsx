import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Connect With FdTech</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            tristique, orci non rhoncus maximus, urna odio semper enim.
            <br />
            Lorem ipsum dolor sit amet
          </span>
          <button className="button">
            <a href="mailto:thienkhiem.tran2608gmail.com">Connect Us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
