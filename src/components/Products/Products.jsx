import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import "./Products.css";

const Products = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
        <span className="redText">Best Choices</span>
        <br />
        <span className="primaryText">Popular Products</span>
        </div>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButton />
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="flexColStart r-card handleCard">
              <img src={card.image} alt="product" />

              <span className="secondaryText r-price">
                <span style={{ color: "#D2153D" }}>$</span>
                <span>{card.price}</span>
              </span>

              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );

};
