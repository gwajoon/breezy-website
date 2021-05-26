import React, { useState } from "react";
import Contact from "../components/ContactSection/index";
import OtherNavbar from "../components/OtherNavbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <OtherNavbar toggle={toggle} />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default ContactPage;