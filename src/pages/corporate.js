import React from "react";
import HomeNavbar from "../components/Navigation/HomeNavbar";
import Sidebar from "../components/Navigation/Sidebar";
import Footer from "../components/Navigation/Footer";
import CollaborateSection from "../components/Navigation/Collaborate";
import CorporateSection from "../components/CorporatePage";

const CorporatePage = () => {
  return (
    <>
      <HomeNavbar />
      <Sidebar />
      <CorporateSection />
      <CollaborateSection />
      <Footer />
    </>
  );
};

export default CorporatePage;
