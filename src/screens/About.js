import React from "react";
import "../assets/about.css";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function About() {
  return (
    <>
    <Particle params={particlesConfig} className="App-particles__container" />
    <div className="App">
      <div className="App-text about">
        <div className="about-text__title">
          Hello, I'm{" "}
          <span className="about-text__title-big">Aditya Raj Singh</span>.
        </div>
        <div className="about-text__title">
          I have created a <span className="about-text__title-big">Cool</span>{" "}
          Portal for sharing your inner thoughts.
        </div>
        <div className="about-text__body">
          Dont let those those thhoughts be inside you anymore , let them be explored
          <br />
          <br />You can also earn from it if a generous reader decides to tip you with some ethereum
        </div>
        <div className="about-social">
          <div className="about-social__title">Thanks for Visiting</div>
          <div className="about-social__links">
            <a
              className="about-social__link"
              href="https://github.com/aditya3011007"
              rel="noopener noreferrer"
              target="_blank">
              GITHUB
            </a>
            <a
              className="about-social__link"
              href="https://www.reddit.com/"
              rel="noopener noreferrer"
              target="_blank">
              Reddit
            </a>
            <a
              className="about-social__link"
              href="mailto:ars3011007@gmail.com"
              rel="noopener noreferrer"
              target="_blank">
              email
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
