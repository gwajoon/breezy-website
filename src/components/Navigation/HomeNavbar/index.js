import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavRouter,
} from "./NavbarElements";
import logo2 from "../../../images/transparentlogo.png";
import { ButtonRouter } from "../../ButtonElements";

const HomeNavbar = ({ toggle }) => {
  const [active, setActive] = useState({
    activeNav: null,
    nav: [
      { id: "home" },
      { id: "about" },
      { id: "accounting" },
      { id: "corporate" },
      { id: "payroll" },
      { id: "guides" },
    ],
  });

  function toggleActive(index) {
    setActive({ ...active, activeNav: active.nav[index] });
  }

  function toggleActiveStyles(index) {
    if (active.nav[index] === active.activeNav) {
      return "active";
    } else {
      return "inactive";
    }
  }

  return (
    <>
      <NavbarContainer>
        <NavLogo to="/">
          <Logo src={logo2}></Logo>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavRouter
              to="/"
              className={toggleActiveStyles(0)}
              onClick={() => {
                toggleActive(0);
              }}
            >
              Home
            </NavRouter>
          </NavItem>
          <NavItem>
            <NavRouter
              to="/about"
              className={toggleActiveStyles(1)}
              onClick={() => {
                toggleActive(1);
              }}
            >
              About Us
            </NavRouter>
          </NavItem>
          <NavItem>
            <NavRouter
              to="/accounting"
              className={toggleActiveStyles(2)}
              onClick={() => {
                toggleActive(2);
              }}
            >
              Accounting
            </NavRouter>
          </NavItem>
          <NavItem>
            <NavRouter
              to="/corporate"
              className={toggleActiveStyles(3)}
              onClick={() => {
                toggleActive(3);
              }}
            >
              Corporate Secretary
            </NavRouter>
          </NavItem>
          <NavItem>
            <NavRouter
              to="/payroll"
              className={toggleActiveStyles(4)}
              onClick={() => {
                toggleActive(4);
              }}
            >
              HR & Payroll
            </NavRouter>
          </NavItem>
          <NavItem>
            <NavRouter
              to="/guides"
              className={toggleActiveStyles(5)}
              onClick={() => {
                toggleActive(5);
              }}
            >
              Guides and Resources
            </NavRouter>
          </NavItem>
        </NavMenu>
        <ButtonRouter
          style={{
            width: "150px",
            background: "transparent",
            border: "1px solid #f59f0a",
          }}
          to="/contact"
        >
          {" "}
          Contact Us
        </ButtonRouter>
      </NavbarContainer>
    </>
  );
};

export default HomeNavbar;
