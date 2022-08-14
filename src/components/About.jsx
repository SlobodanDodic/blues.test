import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import me from "../assets/about/me.png";

export default function About() {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div id="about" className="about">
      <div className="bigBlueSquare"></div>

      <Row>
        <Col sm={12} md={9} className="">
          <Row>
            <Col sm={12} lg={5} className="col-image" style={{ zIndex: "2" }}>
              <img src={me} alt="me" />
            </Col>
            <Col className="col-content" sm={12} lg={7}>
              <h3>
                About me<span>|</span>
              </h3>
              <span className="span-text">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc..
              </span>
              <br />
              <span className={isActive ? "hide-text" : null}>Extra text that is hidden</span>

              <div style={{ marginTop: "35px" }}>
                <Button onClick={toggleClass} className="reference-btn">
                  Get to know me
                </Button>
              </div>
            </Col>
          </Row>
        </Col>

        <Col className="col-tabs" sm={12} md={3}></Col>
      </Row>
    </div>
  );
}
