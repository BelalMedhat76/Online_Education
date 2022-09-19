import React from "react";
import "./Testimonilas.css";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
SwiperCore.use([Autoplay]);

const Testi = () => {
  return (
    <div className="testi_container">
      <div className="testi_header">
        <p>Testimonials</p>
        <h1>Our Student Saying...</h1>
      </div>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          200: {
            width: 400,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        style={{ height: "100%", paddingBottom: "80px" }}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Grid, Pagination]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper container"
      >
        <SwiperSlide id="slide1">
          <div className="testi-content">
            <div className="testPara">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
              <p>
                <b>Jhon Smith:</b>CEO & Founder
              </p>
            </div>
            <div className="quote_icon">
              <FaQuoteLeft />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide1">
          <div className="testi-content">
            <div className="testPara">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
              <p>
                <b>Jhon Smith:</b>CEO & Founder
              </p>
            </div>
            <div className="quote_icon">
              <FaQuoteLeft />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide1">
          <div className="testi-content">
            <div className="testPara">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
              <p>
                <b>Jhon Smith:</b>CEO & Founder
              </p>
            </div>
            <div className="quote_icon">
              <FaQuoteLeft />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide1">
          <div className="testi-content">
            <div className="testPara">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
              <p>
                <b>Jhon Smith:</b>CEO & Founder
              </p>
            </div>
            <div className="quote_icon">
              <FaQuoteLeft />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide1">
          <div className="testi-content">
            <div className="testPara">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
              <p>
                <b>Jhon Smith:</b>CEO & Founder
              </p>
            </div>
            <div className="quote_icon">
              <FaQuoteLeft />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Testi;
