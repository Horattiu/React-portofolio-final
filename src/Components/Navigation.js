import NavLinks from "./NavLinks";
import "./navbar.css";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <nav className={`${sticky ? " sticky" : ""}`}>
        <div className="navigation">
          <div className="logo">
            <img className="logo-img" src={require("./img/logoo7.png")}></img>
          </div>
          <NavLinks />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
