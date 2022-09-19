import React from "react";
import "./Counter.css";
import { Component } from "react";
import counter from "../assets/counter.jpg";
class Counter extends Component {
  state = {};
  render() {
    return (
      <div id="counter">
        <div
          className="container"
          style={{
            marginBottom: "60px",
            paddingBottom: "60px",
            height: "100%",
          }}
        >
          <div
            className="row row-cols-1 row-cols-md-2  g-5 "
            style={{ padding: "70px 0 30px 0" }}
          >
            <div className="col">
              <div
                className="about-inner-section"
                style={{ padding: "0 80px 0 80px" }}
              >
                <h1 style={{ color: "#000" }}>Eduaid is Awesome</h1>
                <p style={{ color: "#000" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  maxime architecto voluptatum asperiores quisquam dolore
                  numquam, necessitatibus corporis vel provident adipisci
                  laboriosam fugiat dignissimos sit aliquam rerum ipsam
                  assumenda dolorem.
                </p>

                <div className="row row-cols-1 row-cols-md-2 g-4 ">
                  <div className="col" style={{ padding: "20px" }}>
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
                  </div>
                  <div className="col" style={{ padding: "20px" }}>
                    {" "}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col  ">
              <img
                src={counter}
                className="about-img"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
