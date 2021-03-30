import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../../assets/img/profile/profile.jpg";
import "./about.css";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="About">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* profile pic  */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* description */}
            <Col xs={12} md={6}>
            <br/>
              <Row className=" align-items-start p-2 my-details rounded">
              
                Hi there! I am <strong>&nbsp;Parth Dalsaniya </strong>
                
                <br />A Full stack Web Developer familier with React js, React
                native, Mongo db, Node js, and React Bootstrap.
                <br />
                I am Studying ICT engineering at PDEU Gandhinagar. Currently i'm
                in 3rd year.
                
                <br />
                Apart from Technical skills I am having personality skills which
                can help me to grow in IT career
                <br />I like learning about new technologies, I have skill like Fast learning, Good communication skills and Time management skills.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#Contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1gYqNUspJt5pmijRWO_37FSKf5CNf6hmH/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/parth-451D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/parth-dalsaniya-166a0919b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
