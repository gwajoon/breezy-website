import React from "react";
import HomeNavbar from "../components/Navigation/HomeNavbar";
import Sidebar from "../components/Navigation/Sidebar";
import Footer from "../components/Navigation/Footer";
import CollaborateSection from "../components/Navigation/Collaborate";
import PayrollSection from "../components/PayrollPage";

const PayrollPage = () => {
  return (
    <>
      <HomeNavbar />
      <Sidebar />
      <PayrollSection />
      <CollaborateSection />
      <Footer />
    </>
  );
};

export default PayrollPage;
