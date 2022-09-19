import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <div className="socialIcon">
          <SiFacebook size={"30px"} />
          <SiInstagram size={"30px"} />
          <SiTwitter size={"30px"} />
          <SiLinkedin size={"30px"} />
          <SiGithub size={"30px"} />
        </div>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: <h1 style={{ color: "#0477BF" }}>countZero</h1>
      </div>
    </MDBFooter>
  );
};
export default Footer;
