import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import astroBkg from "../assets/middle/astro-bkg.png";

export default function Services() {
  return (
    <div id="services" className="services">
      <img alt="" src={astroBkg} className="vw-100" />

      <div className="lorem">
        <h3 className="lorem-title">
          Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
        </h3>
      </div>

      <div className="whiteSquare"></div>

      <div className="grid-container">
        <Row>
          <Col sm={12} md={2} className="column">
            Lorem ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
            <br />
            <span>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, even slightly believable.
            </span>
          </Col>
          <Col sm={12} md={2} className="column">
            ispum lorem ipsum
            <br />
            <span>There are many variations of passages of Lorem Ipsum available,</span>
          </Col>
          <Col sm={12} md={2} className="column">
            Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
          </Col>
          <Col sm={12} md={2} className="column">
            Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={2} className="column">
            Ispum lorem ipsum
            <br />
            <span>Lorem ipsum lorem ipsum lorem ipsum</span>
          </Col>
          <Col sm={12} md={2} className="column">
            Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
          </Col>
          <Col sm={12} md={2} className="column">
            Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
          </Col>
          <Col sm={12} md={2} className="column">
            Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
            <br />
            <span>There are many variations of passages of Lorem Ipsum available,</span>
          </Col>
        </Row>

        <div style={{ width: "100vw", textAlign: "center", marginBottom: "6vh" }}>
          <Button className="service-btn">All services</Button>
        </div>

        <div className="cup">
          <h3 className="cup-text">
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum has been the industry's" - Jack Welch
          </h3>
        </div>
      </div>
    </div>
  );
}
