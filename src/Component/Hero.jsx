import "./Hero.css";
import React, { Component } from "react";
import { Autoplay, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import welcome from "../assets/welcome.jpg";

class Hero extends Component {
  state = {};

  render() {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();

    return (
      <>
        <Swiper
          id="home"
          style={{ margin: "0" }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="back1">
              <div className="hero-head">
                <h1>maintaince</h1>
                <h1>educational value</h1>
                <p>best education theme in 2022</p>
                <a href="#" className="hvr-bounce-to-bottom " id="hero-btn">
                  CONTACT US
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="back2">
              <div className="hero-head">
                <h1>better education for</h1>
                <h1> better world</h1>
                <p>best education theme in 2022</p>
                <a href="#" className="hvr-bounce-to-bottom " id="hero-btn">
                  CONTACT US
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="back3">
              <div className="hero-head">
                <h1>standart syllebaus</h1>
                <h1>for students</h1>
                <p>best education theme in 2022</p>
                <a href="#" className="hvr-bounce-to-bottom " id="hero-btn">
                  CONTACT US
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <section id="services" className="service">
          <div className="container reveal">
            <h2>Services</h2>
            <div className="text-container">
              <div className="text-box " id="card1">
                <div className="services-img">
                  <img src={services1} alt="" />
                </div>
                <h3>Skilled Lecturers</h3>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using.
                </p>
                <a href="#" className="hvr-rectangle-in   hero-btn-card">
                  Read More
                </a>
              </div>
              <div className="text-box " id="service-hover-card">
                <div className="services-img">
                  <img src={services2} alt="" />
                </div>
                <h3>Scholarship Facility</h3>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using.
                </p>
                <a href="#" className="hvr-rectangle-in   hero-btn-card">
                  Read More
                </a>
              </div>
              <div className="text-box" id="card2">
                <div className="services-img">
                  <img src={services3} alt="" />
                </div>
                <h3>Book Library & Store</h3>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using.
                </p>
                <a href="#" className="hvr-rectangle-in   hero-btn-card">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="container welcome">
          <div className="row">
            <div className="col-lg-6 mb-3d-5 px-0">
              <div className="half_column_image">
                <img
                  src={welcome}
                  alt="welcome"
                  className="img-fluid equal-height"
                  style={{ height: "398.5px" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 equal-height"
              style={{ height: "398.5px" }}
            >
              <div className="half_column_content">
                <h2 className="sub-title">Welcome To Campus</h2>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, Smply dummy text of the{" "}
                </p>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s{" "}
                </p>
                <div className="theme-list">
                  <ul>
                    <li className="b1">
                      <a href="#">Great Technology</a>
                    </li>
                    <li className="b1">
                      <a href="#">Best Industry Leaders</a>
                    </li>
                    <li className="b1">
                      <a href="#">Learn Courses Online</a>
                    </li>
                  </ul>
                </div>
                <div className="theme-list ml-xl-5">
                  <ul>
                    <li className="b1">
                      <a href="#">Great Technology</a>
                    </li>
                    <li className="b1">
                      <a href="#">Best Industry Leaders</a>
                    </li>
                    <li className="b1">
                      <a href="#">Learn Courses Online</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
