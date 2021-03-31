import React from "react";
import "./experience.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import  logo  from "../../assets/img/experience/logo.png";

const Experience = () => {
  return (
    <div id="Experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={logo}
                  alt="Student Advizor"
                />
                <h3 className="company-heading">Student Advizor</h3>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Web Development Intern
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Front-End Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> HTML, CSS, JavaScript and ReactJs.
                    <br />
                    <strong>Duration:</strong> March 2021 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>
                      <li>
                        <strong>Developed</strong> an front-end of the main company website and developed 
                        many features.
                      </li>
                      {/* <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support`.
                      </li> */}
                      {/* <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li> */}
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
