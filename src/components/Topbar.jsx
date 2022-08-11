import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";

export default function Topbar() {
  return (
    <Navbar key="xl" expand="xl">
      <Container fluid>
        <Navbar.Brand href="#" className="brand ms-5">
          <img alt="" src={logo} className="position-absolute" />
          <span className="fw-bold">NADA</span>
          <span className="fw-light">MACURA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" />
        <Navbar.Offcanvas aria-labelledby="offcanvasNavbarLabel-expand-xl" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img alt="" src={logo} className="position-absolute" />
              <span className="fw-bold">NADA</span>
              <span className="fw-light">MACURA</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-5">
              <Nav.Link href="#homepage">Homepage</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#sevices">Services</Nav.Link>
              <Nav.Link href="#references">References</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="justify-content-end px-5">
              <Nav.Link href="#serbian">SR</Nav.Link>
              <Nav.Link href="#english">EN</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
