import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { RefData } from "./RefData";

export default function References() {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div id="references" className="references">
      {/* <div className="cup" data-aos={data}>
        <h3 className="cup-text">
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
          Lorem Ipsum has been the industry's" - Jack Welch
        </h3>
      </div> */}

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="row-pills">
          <Col className="col-tabs" sm={12} md={3}>
            <Nav variant="pills" className="flex-column">
              {RefData.map((item) => {
                return (
                  <Nav.Item key={item.id}>
                    <Nav.Link eventKey={item.eventKey}>◆</Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={12} md={9} className="col-map">
            <Tab.Content>
              {RefData.map((item) => {
                return (
                  <Tab.Pane eventKey={item.eventKey} key={item.id}>
                    <Row>
                      <Col className="col-content" sm={12} lg={7}>
                        <h3>{item.title}</h3>
                        <span className="span-container">
                          <span className="quote-first"></span>
                          {item.text}
                          <span className="quote-second"></span>
                        </span>
                        <h4>{item.person}</h4>
                        <span className="span-container">
                          {item.desc}
                          <span className={isActive ? "hide-text" : null}>{item.descHide}</span>
                        </span>
                        <div style={{ marginTop: "35px" }}>
                          <Button onClick={toggleClass} className="reference-btn">
                            All references
                          </Button>
                        </div>
                      </Col>
                      <Col sm={12} lg={5} className="col-image" style={{ zIndex: "2" }}>
                        <img src={item.img} alt={item.title} id="aleks" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>

        <div className="bigWhiteSquare"></div>
      </Tab.Container>
    </div>
  );
}
