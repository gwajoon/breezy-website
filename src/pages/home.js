import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Services from "../components/ServicesSection";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import Pricing from "../components/PricingSection";
import Contact from "../components/ContactSection";

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
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
