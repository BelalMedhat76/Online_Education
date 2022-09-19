import "./App.css";
import React from "react";
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import Depart from "./Component/Department";
import Courses from "./Component/Courses";

import Events from "./Component/ourEvents";
import OurTeacher from "./Component/Teacher";
import Testi from "./Component/Testimonials";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Depart />
      <Courses />
      <Events />
      <OurTeacher />
      <Testi />
      <Footer />
    </div>
  );
}

export default App;
