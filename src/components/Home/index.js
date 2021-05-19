import React from 'react';
import "./style.css";
import { Media, Container, Row, Col } from 'react-bootstrap';


const Home = () => {
  return (
    <Container className="justify-content-center about-me mt-5">
      <Row xs={12} lg={8}>
        <Col xs={4} lg={8}>
          <Media>
            <img
              width={250}
              height={250}
              className="mr-3 mt-5 mb-2"
              src="./assets/pics/linked-in.jpg"
              alt="Me"
            />
          </Media>
        </Col>
      </Row>
      <Row>
        <Media.Body className="text-dark">
          <h2>About Me</h2>
          <p className="flow-text">
          I am currently a student at University of Central Florida, studying to become a Full Stack Programmer. While my background in coding is minimal I hope to have a long and purposeful career. My interest in coding first started back in high school when I took a coding class as an elective. I enjoyed the class a great deal but never really considered it being a career till a few months ago. I greatly enjoy all the possibilities that come with coding. Between coding for web development, applications, or gaming I feel there is nothing I can't do with the knowledge I have, and will be learning.
    </p>
          <p className="flow-text">
          Outside of coding I am currently a server at Joe's Crab Shack. While I enjoy my job and am very excited to start my next journey into the coding world and beyond.
    </p>
        </Media.Body>
      </Row>
    </Container>
  );
};

export default Home;