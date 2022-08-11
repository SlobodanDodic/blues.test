import Container from "react-bootstrap/Container";
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

      <Container>
        <Row>
          <Col className="col-image" xs={6}>
            <img src={runner} alt="" className="img-fluid" />
            <div className="overlay">
              <p className="h4">Group Tour in Maldives</p>
              <p className="textmuted">Ameeru Ahmed magu male,female</p>
            </div>
          </Col>
          <Col xs={6}>
            <Row>
              <Col className="col-image">
                <img src={weight} alt="" />
              </Col>
            </Row>
            <Row className="third">
              <Col className="col-image">
                <img src={bike} alt="" />
              </Col>
              <Col className="col-image">
                <img src={box} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
