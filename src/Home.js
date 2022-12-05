import React, { useEffect } from "react";
import CoverImg from "./Components/CoverImg";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);



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
