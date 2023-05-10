import React, { useRef } from 'react';

function About() {
  function handleDownload(event) {
    event.preventDefault();
    window.open('./Components/img/test.pdf', '_blank');
  }

  return (
    <div className="about-container" id="link-about">
      <div className="positioning-container">
        <div className="portrait-container">
          <img className="portrait" src={require('./img/portrait.jpg')} />
        </div>
        <div className="details">
          <h2 className="aboutme">About me</h2>
          <hr className="hr" />
          <p className="aboutme-text" data-aos="fade-up">
            I am a passionate and dedicated self-taught frontend developer.
            Currently undergoing assignments and tasks from a mid
            software-engineer. I'm looking for an internship or beginner
            friendly role within the industry, looking to join the right culture
            for a mutual win. This is my portfolio.
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
              window.open('https://github.com/Horattiu?tab=repositories')
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
