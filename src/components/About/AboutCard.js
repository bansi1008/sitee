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
            I was employed as a software developer at PAR Solution.
            <br />
            I am currently pursuing an MSc in Advanced Computer Science at
            Newcastle University, UK, and I hold a bachelor's degree in
            Information Technology (IT) .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Board Game Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Urban Exploring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work and strategy always outplay raw talent."{" "}
          </p>
          <footer className="blockquote-footer">Bansi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
