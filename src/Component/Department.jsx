import React, { Component } from "react";
import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import icon_01 from "../assets/icon_01.png";
import icon_02 from "../assets/icon_02.png";
import icon_03 from "../assets/icon_03.png";
import icon_04 from "../assets/icon_04.png";
import icon_05 from "../assets/icon_05.png";
import icon_06 from "../assets/icon_06.png";
class Depart extends Component {
  state = {};
  render() {
    return (
      <section id="depart" className="services">
        <div className="container reveal">
          <h4>Our Departments</h4>
          <h2>Popular Departments</h2>
          <div className="text-container">
            <div
              className="text-box hero-card-hover depart-cards"
              id="department1"
              style={{
                padding: "25px 30px 0 30px",
                background: " transparent",
                color: "black",
                border: "1px solid #97A6A0",
              }}
            >
              <div className="services-img">
                <img src={icon_01} alt="" />
              </div>
              <h3 className="depart-card-head" style={{ color: "#ffffff" }}>
                Electrical Engineering
              </h3>
              <p style={{ color: "#ffffff" }}>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
              <a href="#" className="hvr-rectangle-in   hero-btn-card">
                Read More
              </a>
            </div>
            <div
              className="text-box hero-card-hover depart-cards"
              id="department2"
              style={{
                padding: "25px 30px 0 30px",
                background: " transparent",
                color: "black",
                border: "1px solid #97A6A0",
              }}
            >
              <div className="services-img">
                <img src={icon_02} alt="" />
              </div>
              <h3 className="depart-card-head" style={{ color: "#ffffff" }}>
                Microbio Engineering
              </h3>
              <p style={{ color: "#ffffff" }}>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
              <a href="#" className="hvr-rectangle-in   hero-btn-card">
                Read More
              </a>
            </div>
            <div
              className="text-box hero-card-hover depart-cards"
              id="department3"
              style={{
                padding: "25px 30px 0 30px",
                background: " transparent",
                color: "black",
                border: "1px solid #97A6A0",
              }}
            >
              <div className="services-img">
                <img src={icon_03} alt="" />
              </div>
              <h3 className="depart-card-head" style={{ color: "#ffffff" }}>
                {" "}
                Computer Engineering
              </h3>
              <p style={{ color: "#ffffff" }}>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
              <a href="#" className="hvr-rectangle-in   hero-btn-card">
                Read More
              </a>
            </div>
          </div>
          <div className="text-container">
            <div
              className="text-box hero-card-hover depart-cards"
              id="department4"
              style={{
                padding: "25px 30px 0 30px",
                background: " transparent",
                color: "black",
                border: "1px solid #97A6A0",
              }}
            >
              <div className="services-img">
                <img src={icon_04} alt="" />
              </div>
              <h3 className="depart-card-head" style={{ color: "#ffffff" }}>
                Civil Engineering
              </h3>
              <p style={{ color: "#ffffff" }}>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
              <a href="#" className="hvr-rectangle-in   hero-btn-card">
                Read More
              </a>
            </div>
            <div
              className="text-box hero-card-hover depart-cards"
              id="department5"
              style={{
                padding: "25px 30px 0 30px",
                background: " transparent",
                color: "black",
                border: "1px solid #97A6A0",
              }}
            >
              <div className="services-img">
                <img src={icon_02} alt="" />
              </div>
              <h3 className="depart-card-head" style={{ color: "#ffffff" }}>
                Textile Engineering
              </h3>
              <p style={{ color: "#ffffff" }}>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using.
              </p>
              <a href="#" className="hvr-rectangle-in   hero-btn-card">
                Read More
              </a>
            </div>
            <div
              className="text-box hero-card-hover depart-cards"
              id="department6"
              style={{
                padding: "25px 30px 0 30px",
                background: " transparent",
                color: "black",
                border: "1px solid #97A6A0",
              }}
            >
              <div className="services-img">
                <img src={icon_03} alt="" />
              </div>
              <h3 className="depart-card-head" style={{ color: "#ffffff" }}>
                Computer Engineering
              </h3>
              <p style={{ color: "#ffffff" }}>
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
    );
  }
}

export default Depart;
