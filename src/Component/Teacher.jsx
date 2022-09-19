import { Swiper, SwiperSlide } from "swiper/react";

import "./Teacher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faClock } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/pagination";
import member_01 from "../assets/member_01.jpg";
import member_02 from "../assets/member_02.jpg";
import member_03 from "../assets/member_03.jpg";
import { Grid, Pagination } from "swiper";

import SwiperCore, { Autoplay } from "swiper";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import React, { Component } from "react";
SwiperCore.use([Autoplay]);
class OurTeacher extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="courses-header container"
          id="teacher"
          style={{ paddingTop: "200px" }}
        >
          <h3>Our Teachers</h3>

          <h1>Best Certified Faculty</h1>
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
            900: {
              width: 900,
              slidesPerView: 3,
            },
          }}
          style={{ height: "100%", paddingBottom: "80px" }}
          slidesPerView={4}
          spaceBetween={30}
          modules={[Grid, Pagination]}
          loop={true}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          className="mySwiper container"
        >
          <SwiperSlide id="slide1">
            <div className="teacher_card">
              <div className="techer_img">
                <img src={member_03} alt="" />
                <div className="card_icons">
                  <MdOutlineFacebook size={"40px"} />
                  <IoLogoTwitter size={"40px"} />
                  <FaLinkedin size={"40px"} />
                </div>
              </div>
              <div className="card_info">
                <table>
                  <tbody>
                    <tr>
                      <td>Selina Gomej</td>
                      <td
                        rowSpan={2}
                        style={{ fontWeight: "bold", paddingLeft: "20px" }}
                      >
                        View Details
                      </td>
                    </tr>
                    <tr>
                      <td>Physics Teacher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide2">
            <div className="teacher_card">
              <div className="techer_img">
                <img src={member_02} alt="" />
                <div className="card_icons">
                  <MdOutlineFacebook size={"40px"} />
                  <IoLogoTwitter size={"40px"} />
                  <FaLinkedin size={"40px"} />
                </div>
              </div>
              <div className="card_info">
                <table>
                  <tbody>
                    <tr>
                      <td>Selina Gomej</td>
                      <td
                        rowSpan={2}
                        style={{ fontWeight: "bold", paddingLeft: "20px" }}
                      >
                        View Details
                      </td>
                    </tr>
                    <tr>
                      <td>Physics Teacher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide3">
            <div className="teacher_card">
              <div className="techer_img">
                <img src={member_01} alt="" />
                <div className="card_icons">
                  <MdOutlineFacebook size={"40px"} />
                  <IoLogoTwitter size={"40px"} />
                  <FaLinkedin size={"40px"} />
                </div>
              </div>
              <div className="card_info">
                <table>
                  <tbody>
                    <tr>
                      <td>Selina Gomej</td>
                      <td
                        rowSpan={2}
                        style={{ fontWeight: "bold", paddingLeft: "20px" }}
                      >
                        View Details
                      </td>
                    </tr>
                    <tr>
                      <td>Physics Teacher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide3">
            <div className="teacher_card">
              <div className="techer_img">
                <img src={member_02} alt="" />
                <div className="card_icons">
                  <MdOutlineFacebook size={"40px"} />
                  <IoLogoTwitter size={"40px"} />
                  <FaLinkedin size={"40px"} />
                </div>
              </div>
              <div className="card_info">
                <table>
                  <tbody>
                    <tr>
                      <td>Selina Gomej</td>
                      <td
                        rowSpan={2}
                        style={{ fontWeight: "bold", paddingLeft: "20px" }}
                      >
                        View Details
                      </td>
                    </tr>
                    <tr>
                      <td>Physics Teacher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="slide3">
            <div className="teacher_card">
              <div className="techer_img">
                <img src={member_01} alt="" />
                <div className="card_icons">
                  <MdOutlineFacebook size={"40px"} />
                  <IoLogoTwitter size={"40px"} />
                  <FaLinkedin size={"40px"} />
                </div>
              </div>
              <div className="card_info">
                <table>
                  <tbody>
                    <tr>
                      <td>Selina Gomej</td>
                      <td
                        rowSpan={2}
                        style={{ fontWeight: "bold", paddingLeft: "20px" }}
                      >
                        View Details
                      </td>
                    </tr>
                    <tr>
                      <td>Physics Teacher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}

export default OurTeacher;
