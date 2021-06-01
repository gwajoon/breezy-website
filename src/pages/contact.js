import React, { useState } from "react";
import Contact from "../components/ContactSection/index";
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import Sidebar from "../components/Sidebar";

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
