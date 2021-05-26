import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeNavbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
