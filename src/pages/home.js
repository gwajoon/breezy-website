import React, { useState } from "react";
import HomeNavbar from "../components/Navigation/HomeNavbar";
import Sidebar from "../components/Navigation/Sidebar";
import Footer from "../components/Navigation/Footer";
import CollaborateSection from "../components/Navigation/Collaborate";
import HeroSection from "../components/HomePage/HeroSection";
import Services from "../components/HomePage/ServicesSection";
import OfferSection from "../components/HomePage/OfferSection";

import Pricing from "../components/HomePage/PricingSection";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeNavbar toggle={toggle} />
      <HeroSection />
      <OfferSection />
      <Services />
      <Pricing />
      <CollaborateSection />
      <Footer />
    </>
  );
};

export default HomePage;
