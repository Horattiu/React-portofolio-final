import React, { useRef } from "react";

function About() {
  function handleDownload(event) {
    event.preventDefault();
    window.open("./Components/img/test.pdf", "_blank");
  }

  return (
    <div className="about-container" id="link-about">
      <div className="positioning-container">
        <div className="portrait-container">
          <img className="portrait" src={require("./img/portrait.jpg")} />
        </div>
        <div className="details">
          <h2 className="aboutme">About me</h2>
          <hr className="hr" />
          <p className="aboutme-text" data-aos="fade-up">
            I am highly enthusiastic about software development with with a
            "guilty" passion for UI design. I've had the pleasure of working
            with a few clients, bringing their visions to life. I am actively
            focused on expanding my skill set to become a full-stack developer.
            This is my portfolio.
          </p>
          <button
            className="btn-1"
            onClick={() =>
              window
                .open
                // 'https://drive.google.com/drive/folders/15G1aEDbtfMc3RCyzKHQxQYD68uiSIEj8'
                ()
            }
          >
            Resume
          </button>
          <button
            className="bt2-2"
            onClick={() =>
              window.open("https://github.com/Horattiu?tab=repositories")
            }
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
