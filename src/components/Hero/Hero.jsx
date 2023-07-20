import React from "react";
import "./Hero.css";
import {motion} from "framer-motion";

const Hero = () => {
  
  return (
    <section className="hero-wrapper">
      <div className="bd-example">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
          data-interval="3000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <motion.div
                    initial={{ y: "7rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 5,
                      type: "spring",
                    }}
                  >
              <img
                src="./images/slide2.jpg"
                className="d-block w-100"
                alt="..."
              />
              </motion.div>
             <div className="carousel-caption d-none d-md-block">
                <div className="content">
                <motion.span
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 5,
                      type: "spring",
                    }}
                  ><h3>We provide best service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    ipsum illum alias nisi aliquid repellendus et facilis
                    suscipit quas nesciunt, nulla harum minus ipsa natus fugiat
                    repellat consequatur? Facilis, dolore?
                  </p>
                  </motion.span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <motion.div
                    initial={{ y: "7rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 5,
                      type: "spring",
                    }}
                  >
              <img
                src="./images/slide3.jpg"
                className="d-block w-100"
                alt="..."
              />
              </motion.div>
              
              <div className="carousel-caption d-none d-md-block">
                <div className="content">
                <motion.span
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 5,
                      type: "spring",
                    }}
                  ><h3>We provide best service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    ipsum illum alias nisi aliquid repellendus et facilis
                    suscipit quas nesciunt, nulla harum minus ipsa natus fugiat
                    repellat consequatur? Facilis, dolore?
                  </p>
                  </motion.span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <motion.div
                    initial={{ y: "7rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 5,
                      type: "spring",
                    }}
                  >
              <img
                src="./images/slide4.jpg"
                className="d-block w-100"
                alt="..."
              />
              </motion.div>
              <div className="carousel-caption d-none d-md-block">
                <div className="content">
                <motion.span
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 5,
                      type: "spring",
                    }}
                  ><h3>We provide best service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    ipsum illum alias nisi aliquid repellendus et facilis
                    suscipit quas nesciunt, nulla harum minus ipsa natus fugiat
                    repellat consequatur? Facilis, dolore?
                  </p>
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
