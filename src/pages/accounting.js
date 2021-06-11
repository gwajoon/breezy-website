import React from "react";
import HomeNavbar from "../components/Navigation/HomeNavbar";
import Sidebar from "../components/Navigation/Sidebar";
import Footer from "../components/Navigation/Footer";
import CollaborateSection from "../components/Navigation/Collaborate";
import AccountingSection from "../components/AccountingPage";

const AccountingPage = () => {
  return (
    <>
      <HomeNavbar />
      <Sidebar />
      <AccountingSection />
      <CollaborateSection />
      <Footer />
    </>
  );
};

export default AccountingPage;
