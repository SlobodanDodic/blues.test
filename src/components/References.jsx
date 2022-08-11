import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { RefData } from "./RefData";
// import astroBkg from "../assets/middle/astro-bkg.png";

export default function References() {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div id="references" className="references">
      {/* <img alt="" src={astroBkg} className="vw-100" /> */}

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col className="col-tabs" sm={12} xl={3}>
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
          <Col sm={12} xl={9}>
            <Tab.Content>
              {RefData.map((item) => {
                return (
                  <Tab.Pane eventKey={item.eventKey} key={item.id}>
                    <Row>
                      <Col className="col-content" sm={12} lg={6}>
                        <h2>{item.title}</h2>
                        <span>{item.text}</span>
                        <h4>{item.person}</h4>
                        <span>
                          {item.desc}
                          <span className={isActive ? "hide-text" : null}>{item.descHide}</span>
                        </span>
                        <div style={{ marginTop: "35px" }}>
                          <Button onClick={toggleClass} className="reference-btn">
                            All references
                          </Button>
                        </div>
                      </Col>
                      <Col sm={12} lg={4}>
                        <img src={item.img} alt={item.title} id="aleks" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <div className="bigWhiteSquare"></div>
    </div>
  );
}
