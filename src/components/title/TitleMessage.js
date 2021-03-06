import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -30px;
  text-align: center;
  strong {
    font-size: 1.25em;
    color: white;
  }
  div {
    color: black;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 500;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Parth Dalsaniya </strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Web Developer", "Freelancer", "Learner"],
                autoStart: true,
                loop: true,
                delay: 70,
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;
