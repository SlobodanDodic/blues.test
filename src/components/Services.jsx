import Button from "react-bootstrap/Button";

export default function Services() {
  return (
    <div id="services" className="services">
      <div className="whiteSquare"></div>

      <div className="dummy-text">
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
      </div>

      <div className="box">
        <div className="service-grid">
          <div className="grid-column">
            Lorem ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
            <br />
            <span>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, even slightly believable.
            </span>
          </div>
          <div className="grid-column">
            ispum lorem ipsum
            <br />
            <span>There are many variations of passages of Lorem Ipsum available,</span>
          </div>
          <div className="grid-column">Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum</div>
          <div className="grid-column">Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum</div>
        </div>

        <div className="service-grid">
          <div className="grid-column">
            Ispum lorem ipsum
            <br />
            <span>Lorem ipsum lorem ipsum lorem ipsum</span>
          </div>
          <div className="grid-column">Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum</div>
          <div className="grid-column">Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum</div>
          <div className="grid-column">
            Ispum lorem ipsum ispum lorem ipsum ispum lorem ipsum
            <br />
            <span>There are many variations of passages of Lorem Ipsum available,</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", fontWeight: "300" }}>
        <Button className="service-btn">All services</Button>
      </div>
    </div>
  );
}
