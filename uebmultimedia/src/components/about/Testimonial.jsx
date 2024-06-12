import React from "react";
import Slider from "react-slick";

import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ava01 = "./images/team/t1.webp";
const ava02 = "./images/team/t2.webp";
const ava03 = "./images/team/t3.webp";
const ava04 = "./images/team/t4.webp";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
   
  };

  return (
    <div className="container12">
    <Slider {...settings}>
      <div className="testimonial">
        <p className="section__description">
        I've been using ACADEMIA ONLINE EDUCATION & LEARNING <br />for learning.  The level of service is very highly. I recommend!
        </p>

        <div className="mt-3 d-flex  gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" loading="lazy"/>

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section__description">
        I've been using ACADEMIA ONLINE EDUCATION & LEARNING <br />for learning.  The level of service is very highly. I recommend!
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" loading="lazy" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section__description">
        I've been using ACADEMIA ONLINE EDUCATION & LEARNING <br />for learning.  The level of service is very highly. I recommend!
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2"  loading="lazy"/>

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <p className="section__description">
        I've been using ACADEMIA ONLINE EDUCATION & LEARNING <br />for learning.  The level of service is very highly. I recommend!
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2"  loading="lazy"/>

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default Testimonial;

