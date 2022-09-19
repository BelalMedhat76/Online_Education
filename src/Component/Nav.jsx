import React, { Component } from "react";
import logo from "../assets/logo.png";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar " id="nav_back">
        <a href="#" className="logo ">
          <img
            src={logo}
            className=" edit_logo"
            style={{ borderRadius: "50px", height: "45px" }}
          />
        </a>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <a href="#home" className="link" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="link" style={{ color: "white" }}>
                Services
              </a>
            </li>
            <li>
              <a href="#depart" className="link" style={{ color: "white" }}>
                Department
              </a>
            </li>
            <li>
              <a href="#courses" className="link" style={{ color: "white" }}>
                Courses
              </a>
            </li>
            <li>
              <a href="#event" className="link" style={{ color: "white" }}>
                Events
              </a>
            </li>
            <li>
              <a href="#teacher" className="link" style={{ color: "white" }}>
                Teacher
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
