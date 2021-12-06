import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./footer.module.css";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const index = () => {
  return (
    <div className={style.footer_wrapper}>
      <Container>
        <div className="pt-5">
          <FaFacebook
            onClick={() => window.open("https://www.facebook.com/Donny.shz/")}
            className="hoverme"
            style={{ margin: "0px 15px" }}
            size={45}
          />
          <FaGithub
            onClick={() => window.open("https://github.com/MuhmmadSheraz")}
            className="hoverme"
            style={{ margin: "0px 15px" }}
            size={45}
          />
          <FaLinkedin
            onClick={() => window.open("https://www.linkedin.com/in/muhammad-shiraz-a2a7671b9/")}
            className="hoverme"
            style={{ margin: "0px 15px" }}
            size={45}
          />
        </div>
        <div className="py-4">
          <h5>Terms of Use- Privacy Policy</h5>
          <h5>@2021 Muhammad Shiraz</h5>
        </div>

        {/* <Row className="pt-5 text-left">
          <Col lg={4} md={4} sm={12}>
            <h1>Blogit</h1>
            <p className="pt-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p className="pt-5">
              <FaFacebook style={{ margin: "0px 5px" }} size={50} />
              <FaGithub style={{ margin: "0px 5px" }} size={50} />
              <FaLinkedin style={{ margin: "0px 5px" }} size={50} />
            </p>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <p className={style.footer_heading}>Have a Questions?</p>
            <p className={style.footer_questions}>
              <FaMapMarkerAlt size={20} style={{ margin: "0px 15px" }} /> 203
              Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p className={style.footer_questions}>
              <FaPhoneAlt size={20} style={{ margin: "0px 15px" }} />
              +920090078601
            </p>
            <p className={style.footer_questions}>
              <MdEmail size={30} style={{ margin: "0px 15px" }} />{" "}
              mshazy999@gmail.com
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default index;
