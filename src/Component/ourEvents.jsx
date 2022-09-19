import React from "react";
import "./ourEvents.css";
import "bootstrap/dist/css/bootstrap.min.css";
import event_img from "../assets/event_img.jpg";
import { IoIosArrowDropright } from "react-icons/io";
import { MdAccessTimeFilled, MdLocationPin } from "react-icons/md";
const Events = () => {
  return (
    <>
      <div id="events">
        <div className="events-header ">
          <p>Our Eventws</p>

          <h1>Upcoming Events</h1>
        </div>
        <div className="events container">
          <div className="event-leftSide">
            <img src={event_img} style={{ width: "100%", height: "400px" }} />
            <div style={{ padding: "20px", paddingTop: "100px" }}>
              <h2>Buid Education Website With Wp And</h2>
              <p>
                Coluta nobis est eligendi optio cumque nihil impedit quo minusd
                quod maxime placeat facere possimus, omnis voluptas assumenda
                est. Our friendly support team is standing. Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
              <button className="event_btn">
                Join Event <IoIosArrowDropright />
              </button>
            </div>
          </div>
          <div className="event-rightSide">
            <div className="conatinerofEventDate">
              <div className="leftsideOfEvent_date">
                <h1 style={{ fontSize: "60px", color: "#ff5202" }}>14</h1>
                <h2>DEC</h2>
              </div>
              <div className="rightsideOfEvent_date">
                <p>Build Education Website Using WP</p>
                <div className="eventTime">
                  <p>
                    {" "}
                    <MdAccessTimeFilled
                      style={{ fontSize: "25px", color: "#ff5202" }}
                    />{" "}
                    8:00 AM -5:00 PM
                  </p>
                  <p>
                    {" "}
                    <MdLocationPin
                      style={{ fontSize: "25px", color: "#ff5202" }}
                    />{" "}
                    NewYork,USA
                  </p>
                </div>
                <p>
                  Consectetur adipis icing elit, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua....
                </p>
              </div>
            </div>

            <div className="conatinerofEventDate">
              <div className="leftsideOfEvent_date">
                <h1 style={{ fontSize: "60px", color: "#ff5202" }}>20</h1>
                <h2>Feb</h2>
              </div>
              <div className="rightsideOfEvent_date">
                <p>Build Education Website Using WP</p>
                <div className="eventTime">
                  <p>
                    {" "}
                    <MdAccessTimeFilled
                      style={{ fontSize: "25px", color: "#ff5202" }}
                    />{" "}
                    8:00 AM -5:00 PM
                  </p>
                  <p>
                    {" "}
                    <MdLocationPin
                      style={{ fontSize: "25px", color: "#ff5202" }}
                    />{" "}
                    NewYork,USA
                  </p>
                </div>
                <p>
                  Consectetur adipis icing elit, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua....
                </p>
              </div>
            </div>
            <div className="conatinerofEventDate">
              <div className="leftsideOfEvent_date">
                <h1 style={{ fontSize: "60px", color: "#ff5202" }}>19</h1>
                <h2>June</h2>
              </div>
              <div className="rightsideOfEvent_date">
                <p>Build Education Website Using WP</p>
                <div className="eventTime">
                  <p>
                    {" "}
                    <MdAccessTimeFilled
                      style={{ fontSize: "25px", color: "#ff5202" }}
                    />{" "}
                    8:00 AM -5:00 PM
                  </p>
                  <p>
                    {" "}
                    <MdLocationPin
                      style={{ fontSize: "25px", color: "#ff5202" }}
                    />{" "}
                    NewYork,USA
                  </p>
                </div>
                <p>
                  Consectetur adipis icing elit, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Events;
