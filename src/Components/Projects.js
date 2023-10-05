import React from "react";
import "./projects.css";

function Projects() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-projects" id="link-projects">
      <p className="projects-title">Projects</p>
      <div
        className="projects-container grid"
        data-aos="fade-up"
        data-aos-offset="100"
      >
        <div className="project-box">
          <img className="ss-project" src={require("./img/portog.png")}></img>
          <div className="overlay-content">
            <p className="content-text">
              freelance project i did for a client / furniture company using
              react
            </p>
            <a
              className="blank"
              href="https://fabricadserv.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">
          <img
            className="ss-project"
            src={require("./img/expense-tracker-thumbnail.jpg")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">react expense tracker</p>
            <a
              className="blank"
              href="https://react-expense-tracker-final.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">
          <img
            className="ss-project"
            src={require("./img/image-gallery-thumbnail.jpg")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">react image-gallery</p>
            <a
              className="blank"
              href="https://react-tw-img-gallery.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">
          <img
            className="ss-project ss-project2"
            src={require("./img/blog.JPG")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">
              blog application developed using Node.js and MongoDB
            </p>
            <a
              className="blank"
              href="https://express-nodejs-ll9x.onrender.com/blogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>

        <div className="project-box">
          <img
            className="ss-project"
            src={require("./img/live-image-filter-thumbnail.jpg")}
          ></img>
          <div className="overlay-content">
            <p className="content-text">live image-filter</p>
            <a
              className="blank"
              href="https://live-image-filter-final.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div>
        {/* 
        <div className="project-box">
          <img className="ss-project" src={require('./img/chat2.JPG')}></img>
          <div className="overlay-content">
            <p className="content-text">
              Chat app- built using React and Firebase
            </p>
            <a
              className="blank"
              href="https://chatapp-firebase-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div> */}

        {/* <div className="project-box">
          <img className="ss-project" src={require('./img/chatapp.JPG')}></img>
          <div className="overlay-content">
            <p className="content-text">
              Chat app- The app is built using React and Firebase, and allows
              users to log in using their Google account. Once logged in, users
              can send messages through the app.
            </p>
            <a
              className="blank"
              href="https://chatapp-firebase-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-2">View live demo</button>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
