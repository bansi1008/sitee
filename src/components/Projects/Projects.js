import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import resto from "../../Assets/Projects/resto.PNG";
import book from "../../Assets/Projects/book.jpg";
import imgu from "../../Assets/Projects/Imgmulti.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgu}
              isBlog={false}
              title="Multimart"
              description="Developed and deployed a full-stack e-commerce web application, leveraging React, Node.js, and Vercel for deployment.  
Designed a responsive interface using Tailwind CSS, ensuring compatibility across mobile and desktop devices. 
Integrated dynamic features such as product browsing, cart functionality, and user authentication for a smooth user 
experience. 
Successfully demonstrated expertise in full-stack development, responsive design, and modern web technologies. 
"
              demoLink="https://multimart-sepia.vercel.app/"
              ghLink="https://github.com/bansi1008/sitee"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resto}
              isBlog={false}
              title="Restaurant Landing Page"
              description="Developed a dynamic and responsive landing page for a restaurant using React. Implemented interactive features like menu 
display, reservation booking, and customer reviews. 
Designed a visually appealing user interface with a focus on user experience and ease of navigation. 
Ensured cross-browser compatibility and mobile responsiveness. Deployed the application on Netlify for seamless hosting 
and accessibility."
              demoLink="https://67c0f21d85804445893d6e71--strong-swan-afce65.netlify.app/"
              ghLink="https://github.com/bansi1008/Resto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Upwork JSS Calculator"
              description="Developed a web application that calculates an estimated Upwork Job Success Score (JSS)
based on various factors such as client feedback, completed jobs, and contract outcomes.
Built the front-end using React, leveraging functional components and hooks to create an
interactive and user-friendly interface."
              ghLink="https://github.com/bansi1008/Upworkjss"
              demoLink="https://bansi1008.github.io/Upworkjss/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Quiz System
"
              description="Developed an interactive Quiz System using core Java, focusing on object-oriented
programming principles to create a modular and maintainable codebase.
Implemented essential features for quiz creation, question management, and scoring logic,
demonstrating proficiency in data structures and algorithms.
Designed a command-line interface to facilitate user interaction, ensuring a smooth and
intuitive experience for users."
              ghLink="https://github.com/bansi1008/QuizUsingJava"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Bookstore with Microservices "
              description="Developed a bookstore application using React.js for the frontend and Node.js with Express.js for the backend, following a 
microservices architecture for scalability. 
Implemented core functionalities including book browsing, search, pagination, and a shopping cart system, allowing users 
to add books and proceed to checkout. 
Designed and managed two microservices: Catalog Service for CRUD operations on books using PostgreSQL as the 
database, and Cart Service for handling shopping cart operations, ensuring smooth transaction flow. Secured admin 
functionalities with role-based authentication, allowing only authorized users to add, edit, and delete books from the 
catalog. 
Integrated RESTful APIs between frontend and backend services, enabling seamless data flow and real-time updates. 
Optimized database performance by structuring data efficiently in PostgreSQL, ensuring fast queries and data integrity. 
Utilized Git & GitHub for version control, maintaining a well-documented and structured codebase to facilitate team 
collaboration."
              ghLink="https://github.com/bansi1008/Bookstore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Waste Food management System"
              description="The Food Donation System was created with help of frontend tools HTML, CSS,
JavaScript, and backend tools like PHP and main aim of the project was to reduce food
waste by donating food to needy people."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
