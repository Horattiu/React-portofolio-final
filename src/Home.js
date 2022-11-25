import React from "react";
import CoverImg from "./Components/CoverImg";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CoverImg />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
