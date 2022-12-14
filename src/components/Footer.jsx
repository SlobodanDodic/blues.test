import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { TbBrandLinkedin, TbBrandInstagram } from "react-icons/tb";
import { RiFacebookBoxLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div id="footer" className="footer">
      <Navbar key="xl" expand="xl">
        <Container fluid className="footer-container">
          <Navbar.Brand href="#" className="brand">
            <img alt="" src={logo} className="position-absolute" />
            <span className="fw-bold">NADA</span>
            <span className="fw-light">MACURA</span>
          </Navbar.Brand>

          <Nav className="justify-content-end footer-links">
            <div className="pages">
              <Nav.Link href="#homepage">Homepage</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#sevices">Services</Nav.Link>
              <Nav.Link href="#references">References</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </div>

            <Nav.Link href="#linkedin" className="social-link p-0">
              <TbBrandLinkedin />
            </Nav.Link>
            <Nav.Link href="#facebook" className="social-link p-0">
              <RiFacebookBoxLine />
            </Nav.Link>
            <Nav.Link href="#instagram" className="social-link p-0">
              <TbBrandInstagram />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Row className="container-last">
        <Col className="col-left">
          <span>Photography copyrights: </span>
          <a href="nekilink1">Neki link</a> | <a href="nekilink1">Neki neki link.</a>
        </Col>
        <Col className="col-right">
          <span>Design and development: </span>
          <a href="https://www.popwebdesign.net/" target="_blank" rel="noreferrer">
            PopArt Studio
          </a>
        </Col>
      </Row>

      <div className="summit"></div>
    </div>
  );
}
