import React, { useEffect, useState } from "react";
import "./Service.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor"; // Import the VisibilitySensor component


const Service = () => {
  const [motionCompleted, setMotionCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("service-image");
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

  return (
    <section className="c-wrapper">
      <div className="paddings flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="redText">Our Services</span>
          <span className="primaryText">Standards and Information</span>
          <span className="secondaryText">
            We offer the full spectrum of services to help organisations work
            better. Everything from creating standards of excellence to training
            your people to work in more effective ways, assessing how you’re
            doing, and helping you perform even better in future.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Construction</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                  </div>
                </div>
                <div className="flexCenter button">Learn More</div>
              </div>
              {/* second row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Renovation</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </div>
                </div>
                <div className="flexCenter button">Learn More</div>
              </div>
              {/* third row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Material</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </div>
                </div>
                <div className="flexCenter button">Learn More</div>
              </div>
              {/* fourth row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Maintenance</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
              {/* fifth row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Interior Design</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </div>
                </div>
                <div className="flexCenter button">Learn More</div>
              </div>
              {/* sixth row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Building</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  </div>
                </div>
                <div className="flexCenter button">Learn More</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
        <motion.div
            initial={{opacity: 0 }}
            animate={motionCompleted ? {opacity: 1 } : undefined}
            transition={{
              duration: 5,
              type: "anticipate",
              exit: false,
            }}
          >
          <div className="image-container imageHandle">
            <img src="./images/service.jpg" alt="about" id="service-image" />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
