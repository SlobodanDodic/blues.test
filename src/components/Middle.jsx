import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import astroBkg from "../assets/middle/astro-bkg.png";
import handball from "../assets/middle/handball.png";
import soccer from "../assets/middle/soccer.png";
import volleyball from "../assets/middle/volleyball.png";
import basketball from "../assets/middle/basketball.png";
import shooting from "../assets/middle/shooting.png";
import judo from "../assets/middle/judo.png";
import karate from "../assets/middle/karate.png";
import tennis from "../assets/middle/tennis.png";
import athletics from "../assets/middle/athletics.png";
import biathlon from "../assets/middle/biathlon.png";

export default function Middle() {
  return (
    <div id="middle" className="middle">
      <img alt="" src={astroBkg} className="vw-100" />

      <h5>Train your train.</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        <br />
        been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br />
        Lorem Ipsum has been the industry's
      </p>

      <div className="blackSquare"></div>

      <div className="icons-div">
        <Row className="row-up">
          <Col xs={6} md={2}>
            <img src={handball} alt="footballPlayer" /> handball
          </Col>
          <Col xs={6} md={2}>
            <img src={soccer} alt="footballPlayer" /> football
          </Col>
          <Col xs={6} md={2}>
            <img src={volleyball} alt="footballPlayer" /> volleyball
          </Col>
          <Col xs={6} md={2}>
            <img src={basketball} alt="footballPlayer" /> basketball
          </Col>
          <Col xs={6} md={2}>
            <img src={shooting} alt="footballPlayer" /> shooting
          </Col>
        </Row>

        <Row className="row-down">
          <Col xs={6} md={2}>
            <img src={judo} alt="footballPlayer" /> judo
          </Col>
          <Col xs={6} md={2}>
            <img src={karate} alt="footballPlayer" /> karate
          </Col>
          <Col xs={6} md={2}>
            <img src={tennis} alt="footballPlayer" /> tennis
          </Col>
          <Col xs={6} md={2}>
            <img src={athletics} alt="footballPlayer" /> athletics
          </Col>
          <Col xs={6} md={2}>
            <img src={biathlon} alt="footballPlayer" /> biathlon
          </Col>
        </Row>
      </div>

      <div className="lorem">
        <h3 className="lorem-title">
          Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
        </h3>
      </div>
    </div>
  );
}
