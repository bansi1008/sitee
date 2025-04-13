import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVercel, SiRailway } from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Cloud() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRailway />
      </Col>
    </Row>
  );
}

export default Cloud;
