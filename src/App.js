import React from "react";
import MyNavbar from "./components/navbar/MyNavbar";
import MyCarousal from "./components/carousal/MyCarousal";
import TitleMessage from "./components/title/TitleMessage";
import { Container } from "react-bootstrap";
import About from "./pages/about/About";

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
    </div>
  );
};

export default App;
