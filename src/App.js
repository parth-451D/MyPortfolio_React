import React from "react";
import MyNavbar from "./components/navbar/MyNavbar";
import MyCarousal from "./components/carousal/MyCarousal";
import TitleMessage from "./components/title/TitleMessage";
import { Container } from "react-bootstrap";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
import Slide from "react-reveal/Slide";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="App">
      {/* home page */}
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <hr />

      {/* about page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={700}>
            <About />
          </Slide>
        </Container>
      </div>
      <hr />

      {/* skills page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={700}>
            <Skills />
          </Slide>
        </Container>
      </div>
      <hr />

      {/* experience page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={700}>
            <Experience />
          </Slide>
        </Container>
      </div>
      <hr />

      {/* projects page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={700}>
            <Projects />
          </Slide>
        </Container>
      </div>
    </div>
  );
};

export default App;
