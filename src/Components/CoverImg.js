import React from "react";
import "./coverimg.css";

const CoverImg = () => {
  return (
    <div className="cover-container">
      <img src={require("./img/cover.jpg")} className="cover-img" />
      <div className="text-container">
        <h2 className="cover-text"> hi,</h2>
        <h2 className="cover-text"> I'm Oltean Horatiu</h2>
        <h2 className="cover-text"> web developer</h2>
        <h2 className="cover-text"> based in Romania</h2>
      </div>
    </div>
  );
};

export default CoverImg;
