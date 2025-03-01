import React from "react";
import Navbar from "../Components/Navbar";
import Image from "../Components/Image";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <img src="../assets/image.png" alt="" />
        <HeroSection />
        <About />
      </div>
    </>
  );
};

export default Home;
