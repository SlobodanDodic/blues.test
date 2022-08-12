import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";

export default function Topbar() {
  return (
    <Navbar key="xl" expand="md">
      <Container fluid>
        <Navbar.Brand href="#" className="brand">
          <img alt="" src={logo} className="position-absolute" />
          <span className="fw-bold">NADA</span>
          <span className="fw-light">MACURA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img alt="" src={logo} className="position-absolute" />
              <span className="fw-bold">NADA</span>
              <span className="fw-light">MACURA</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link href="#homepage">Homepage</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#sevices">Services</Nav.Link>
              <Nav.Link href="#references">References</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="#serbian">SR</Nav.Link>
              <Nav.Link href="#english">EN</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
