import "./navlinks.css";
import { useState } from "react";

const NavLinks = ({ setOpen }) => {
  return (
    <>
      <ul className="links ">
        <li onClick={() => setOpen(false)}>
          <a href="#link-about">about me</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#link-tech">tech</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#link-projects">projects</a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
