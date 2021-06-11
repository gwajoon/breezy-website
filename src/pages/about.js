import React, { useState } from "react";
import AboutSection from "../components/AboutPage/AboutSection";
import Footer from "../components/Navigation/Footer";
import HomeNavbar from "../components/Navigation/HomeNavbar";
import Sidebar from "../components/Navigation/Sidebar";
import TeamSection from "../components/AboutPage/TeamSection";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeNavbar toggle={toggle} />
      <AboutSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default AboutPage;
