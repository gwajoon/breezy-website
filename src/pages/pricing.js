import React, { useState } from "react";
import Pricing from "../components/Pricing/index";
import OtherNavbar from "../components/OtherNavbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const PricingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <OtherNavbar toggle={toggle} />
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
};

export default PricingPage;
