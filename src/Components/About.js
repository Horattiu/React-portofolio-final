import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="about-container" id="link-about">
        <div className="positioning-container">
          <div className="portrait-container">
            <img className="portrait" src={require("./img/test1.jpg")}></img>
          </div>
          <div className="details">
            <h2 className="aboutme"> About me</h2>
            <hr className="hr"></hr>
            <p className="aboutme-text">
              I am a passionate and dedicated self-taught person, aspiring to
              become a frontend developer / engineer.Currently undergoing
              assignments and tasks from a mid software-engineer. I'm looking
              for an internship or beginner friendly role within the industry,
              looking to join the right culture for a mutual win. This is my
              portofolio.
            </p>
            <button className="btn-1">download CV</button>
            <button className="bt-2">github</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
