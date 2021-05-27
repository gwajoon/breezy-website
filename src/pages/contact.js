import React, { useState } from "react";
import Contact from "../components/ContactSection/index";
import OtherNavbar from "../components/OtherNavbar";
import OtherSidebar from "../components/OtherSidebar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OtherSidebar isOpen={isOpen} toggle={toggle} />
      <OtherNavbar toggle={toggle} />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default ContactPage;