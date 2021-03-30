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
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

const App = () => {
  return (
    <div style={{ position: "relative" }} >
      {/* home page */}
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <hr />

      {/* about page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <About />
          </Slide>
        </Container>
      </div>
      <hr />

      {/* skills page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Skills />
          </Slide>
        </Container>
      </div>
      <hr />

      {/* experience page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Experience />
          </Slide>
        </Container>
      </div>
      <hr />

      {/* projects page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Projects />
          </Slide>
        </Container>
      </div>
      <hr/>

      {/* Contact me page */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Contact />
          </Slide>
        </Container>
      </div>
      <hr/>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
