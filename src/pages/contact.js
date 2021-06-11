import React, { useState } from "react";
import Contact from "../components/ContactSection/index";
import Footer from "../components/Navigation/Footer";
import HomeNavbar from "../components/Navigation/HomeNavbar";
import Sidebar from "../components/Navigation/Sidebar";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeNavbar toggle={toggle} />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default ContactPage;
