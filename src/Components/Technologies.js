import React from "react";
import "./technologies.css";
import "./about.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { DiGit } from "react-icons/di";
import { BsGithub } from "react-icons/bs";

function Technologies() {
  return (
    <div className="bg-box" id="link-tech">
      <div className="position">
        <div className="tech-title-ill">
          <div className="tech-container">
            <h2>Technologies i use</h2>
            <h3>The path i chose</h3>
          </div>
          <div className="walkingdog-container" >
            <img
              className="walkingdog"
              src={require("./img/pathill.png")}
            ></img>
          </div>
        </div>

        <div className="box-container grid" data-aos="fade-up">
          <div className="box">
            <h4>
              Javascript
              <IoLogoJavascript className="icon" />
            </h4>
            <hr className="hrr" />
            <h5>
              Built my knowledge on the language from ground up following ES6+
              concepts. Studied both in OOP and Functional paradigms.
            </h5>
          </div>

          <div className="box">
            <h4>
              React
              <span>
                <FaReact className="icon" />
              </span>
            </h4>
            <hr className="hrr" />

            <h5>
              Currently undergoing an in-depth guide on the React framework
              library. This website is my first project
            </h5>
          </div>
          <div className="box">
            <h4>
              CSS3
              <IoLogoCss3 className="icon" />
            </h4>
            <hr className="hrr" />

            <h5>
              In-depth dive through 3 different courses of learning what CSS3 is
              and how to apply it in real world projects
            </h5>
          </div>
          <div className="box">
            <h4>
              HTML5
              <ImHtmlFive className="icon" />
            </h4>
            <hr className="hrr" />

            <h5>
              I studied HTML alongside CSS3 and learnt the importance of well
              structured and semantic HTML.
            </h5>
          </div>
          <div className="box">
            <h4>
              Git & Github
              <DiGit className="icon icon-git" />
              <BsGithub className="icon" />
            </h4>
            <hr className="hrr" />

            <h5>
              Going for the web development path I understood version control
              systems and their importance.
            </h5>
          </div>
          <div className="box">
            <h4>tailwind css </h4>
            <hr className="hrr" />

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus?
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
