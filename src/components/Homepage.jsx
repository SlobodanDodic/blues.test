import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import heroImage from "../assets/hero/hero-image.png";

export default function Homepage() {
  const [style, setStyle] = useState("row-info");

  const changeStyle = () => {
    setStyle("row-info-hide");
  };

  const handeClick = () => {
    alert("I will tell eventually");
  };

  return (
    <Container id="homepage" className="hero m-0 p-0">
      <div className="backgroundImages vw-100">
        <img alt="" src={heroImage} className="vw-100" />
      </div>

      <Row className={style}>
        <Col>
          You're looking at a temporary website version, You're looking at a temporary website version You're looking at
          a temporary.
          <Button onClick={changeStyle}>x</Button>
        </Col>
      </Row>

      <Stack className="lorem">
        <Row>
          <Col className="lorem-title">
            Lorem Ipsum has <br /> been the industry's.<span>|</span>
          </Col>
        </Row>
        <Row>
          <Col className="lorem-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </Col>
        </Row>
        <Row>
          <Col className="lorem-text">
            <Button onClick={handeClick}>Tell me more</Button>
          </Col>
        </Row>
      </Stack>
    </Container>
  );
}
