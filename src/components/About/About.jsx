import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./About.css";
import data from "../../utils/accordion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor"; // Import the VisibilitySensor component
import { motion } from "framer-motion";

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const [motionCompleted, setMotionCompleted] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-image");
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      

      if (elementPosition < viewportHeight && !motionCompleted) {
        setMotionCompleted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [motionCompleted]);


  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !startCount) {
      setStartCount(true);

    }
  };

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter">
        {/* left side */}
        <div className="v-left">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={motionCompleted ? { x: 0, opacity: 1 } : undefined}
            transition={{
              duration: 5,
              type: "spring",
              exit: false,
            }}
          >
            <div className="image-container">
              <img src="./images/about.jpg" alt="about" id="about-image" />
            </div>
          </motion.div>
        </div>
      </div>
      {/* right side */}
      <div className="flexColStart v-right">
        <span className="redText">Our Value</span>
        <span className="primaryText">Value We Give To You</span>
        <span className="secondaryText">
          We always give the best service to our customers and we are always
          ready to help you.
          <br />
          We are always ready to help you 24/7.
        </span>

        <Accordion
          onChange={handleVisibilityChange}
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((item, i) => {
            const [className, setClassName] = useState(null);
            return (
              <AccordionItem
                className={`accordionItem ${className}`}
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                      }
                    </AccordionItemState>

                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="flexCenter stats">
          <VisibilitySensor
            onChange={handleVisibilityChange}
            partialVisibility
            offset={{ bottom: -550, top: -1000 }}
          >
            {({ isVisible }) => (
              <div className="flexColCenter stat">
                <span>
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={isVisible ? 1000 : 0}
                      duration={3}
                    />
                  ) : (
                    <span>{isVisible ? "0" : "1000"}</span>
                  )}
                  <span style={{ color: "#D2153D" }}>+</span>
                </span>
                {isVisible && (
                  <span className="secondaryText">Premium Products</span>
                )}
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor
            onChange={handleVisibilityChange}
            partialVisibility
            offset={{ bottom: -550, top: -1000 }}
          >
            {({ isVisible }) => (
              <div className="flexColCenter stat">
                <span>
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={isVisible ? 2000 : 0}
                      duration={3}
                    />
                  ) : (
                    <span>{isVisible ? "0" : "2000"}</span>
                  )}
                  <span style={{ color: "#D2153D" }}>+</span>
                </span>
                {isVisible && (
                  <span className="secondaryText">Happy Customers</span>
                )}
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor
            onChange={handleVisibilityChange}
            partialVisibility
            offset={{ bottom: -550, top: -1000 }}
          >
            {({ isVisible }) => (
              <div className="flexColCenter stat">
                <span>
                  {startCount ? (
                    <CountUp start={0} end={isVisible ? 50 : 0} duration={4} />
                  ) : (
                    <span>{isVisible ? "0" : "50"}</span>
                  )}
                  <span style={{ color: "#D2153D" }}>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
};

export default About;
