import React, { useState } from "react";
import Pricing from "../components/PricingSection/index";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import HomeNavbar from "../components/HomeNavbar";

const PricingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeNavbar toggle={toggle} />
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
};

export default PricingPage;
