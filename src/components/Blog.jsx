import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import runner from "../assets/blog/foto1-run.png";
import weight from "../assets/blog/foto2-weight.png";
import bike from "../assets/blog/foto3-bike.png";
import box from "../assets/blog/foto4-box.png";

export default function Blog() {
  return (
    <div id="blog" className="blog">
      <h2>Latest from the blog.</h2>

      <div className="blog-container">
        <Row>
          <Col className="col-image" xs={12} md={6}>
            <figure>
              <img src={runner} alt="runner" />
              <div className="overlay">
                <h6>03.10.2019.</h6>
                <h5>Align your mind and body with the demanding.</h5>
              </div>
            </figure>
          </Col>

          <Col xs={12} md={6}>
            <Row>
              <Col className="col-image">
                <figure>
                  <img src={weight} alt="" />
                  <div className="overlay overlay-weight">
                    <h6>03.10.2019.</h6>
                    <h5>Align your mind and body with the demanding.</h5>
                  </div>
                </figure>
              </Col>
            </Row>

            <Row className="third">
              <Col xs={12} md={6} className="col-image">
                <figure>
                  <img src={bike} alt="" />
                  <div className="overlay overlay-bike">
                    <h6>03.10.2019.</h6>
                    <h5>Align your mind and body...</h5>
                  </div>
                </figure>
              </Col>

              <Col xs={12} md={6} className="col-image">
                <figure>
                  <img src={box} alt="" />
                  <div className="overlay overlay-box">
                    <h6>03.10.2019.</h6>
                    <h5>Align your mind and body...</h5>
                  </div>
                </figure>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
