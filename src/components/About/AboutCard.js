import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone , <br /> <br /> I am{" "}
            <span className="purple">Bansi Dobariya, </span>
            <span className="purple"></span>
            I am currently working as a Full stack devloper at Newcastle
            University and previously worked at Par Solotuion as a Software
            developer.
            <br />
            I have got Master degree in Advanced Computer Science at Newcastle
            University, UK, and I hold a bachelor's degree in Information
            Technology (IT) .
            <br />
            <br />
            Apart from coding, I do not visualize my life :)
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
