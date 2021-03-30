import React from "react";
import MyNavbar from "./components/navbar/MyNavbar";
import MyCarousal from "./components/carousal/MyCarousal";
import TitleMessage from "./components/title/TitleMessage";
import { Container } from "react-bootstrap";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";

const App = () => {
  return (
    <div className="App">
      {/* home page */}
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <div>
        <Container className="container-box rounded">
            <About />
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
            <Skills />
        </Container>
      </div>
    </div>
  );
};

export default App;
