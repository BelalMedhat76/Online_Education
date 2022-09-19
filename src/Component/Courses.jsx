import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faClock } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";

import featured_03 from "../assets/featured_03.jpg";
import featured_01 from "../assets/featured_01.jpg";
import featured_02 from "../assets/featured_02.jpg";
import featured_04 from "../assets/featured_04.jpg";
import featured_05 from "../assets/featured_05.jpg";
import featured_06 from "../assets/featured_06.jpg";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
class Courses extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="courses-header container" id="courses">
          <h3>Best Courses</h3>

          <h1>Featured Courses</h1>
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
            delay: 1200,
            disableOnInteraction: false,
          }}
          className="mySwiper container"
        >
          <SwiperSlide id="slide1">
            <div className="slide1-content">
              <div className="courses-card-img">
                {" "}
                <img className="img" src={featured_03} />
                <button className="btn-img">$60</button>
              </div>
              <div className="courses-card-notes">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  M Park
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  16 Seats
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  $ Years
                </span>
              </div>
              <div className="courses-card-content">
                <h1 className="card-head">Advanced Web Design</h1>
                <p className="card-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quo aspernatur assumenda suscipit explicabo doloribus
                  accusamus
                </p>
                <a href="#" className="hvr-bubble-right " id="courses-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide2">
            {" "}
            <div className="slide1-content">
              <div className="courses-card-img">
                {" "}
                <img className="img" src={featured_01} />
                <button className="btn-img">$80</button>
              </div>
              <div className="courses-card-notes">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  M Park
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  16 Seats
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  $ Years
                </span>
              </div>
              <div className="courses-card-content">
                <h1 className="card-head">Web Development</h1>
                <p className="card-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quo aspernatur assumenda suscipit explicabo doloribus
                  accusamus
                </p>
                <a href="#" className="hvr-bubble-right " id="courses-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide3">
            {" "}
            <div className="slide1-content">
              <div className="courses-card-img">
                {" "}
                <img className="img" src={featured_02} />
                <button className="btn-img">$60</button>
              </div>
              <div className="courses-card-notes">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  M Park
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  16 Seats
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  $ Years
                </span>
              </div>
              <div className="courses-card-content">
                <h1 className="card-head">Graphic Design</h1>
                <p className="card-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quo aspernatur assumenda suscipit explicabo doloribus
                  accusamus
                </p>
                <a href="#" className="hvr-bubble-right " id="courses-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide4">
            {" "}
            <div className="slide1-content">
              <div className="courses-card-img">
                {" "}
                <img className="img" src={featured_04} />
                <button className="btn-img">$90</button>
              </div>
              <div className="courses-card-notes">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  M Park
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  16 Seats
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  $ Years
                </span>
              </div>
              <div className="courses-card-content">
                <h1 className="card-head">UI Design</h1>
                <p className="card-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quo aspernatur assumenda suscipit explicabo doloribus
                  accusamus
                </p>
                <a href="#" className="hvr-bubble-right " id="courses-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide5">
            {" "}
            <div className="slide1-content">
              <div className="courses-card-img">
                {" "}
                <img className="img" src={featured_05} />
                <button className="btn-img">$70</button>
              </div>
              <div className="courses-card-notes">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  M Park
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  16 Seats
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  $ Years
                </span>
              </div>
              <div className="courses-card-content">
                <h1 className="card-head">UX Design</h1>
                <p className="card-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quo aspernatur assumenda suscipit explicabo doloribus
                  accusamus
                </p>
                <a href="#" className="hvr-bubble-right " id="courses-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide6">
            {" "}
            <div className="slide1-content">
              <div className="courses-card-img">
                {" "}
                <img className="img" src={featured_06} />
                <button className="btn-img">$100</button>
              </div>
              <div className="courses-card-notes">
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faUser}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  M Park
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  16 Seats
                </span>

                <span>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="courses-card-icon"
                  ></FontAwesomeIcon>
                  $ Years
                </span>
              </div>
              <div className="courses-card-content">
                <h1 className="card-head">System Analysis</h1>
                <p className="card-para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quo aspernatur assumenda suscipit explicabo doloribus
                  accusamus
                </p>
                <a href="#" className="hvr-bubble-right " id="courses-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default Courses;
