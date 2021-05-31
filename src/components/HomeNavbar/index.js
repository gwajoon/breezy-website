import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import logo from "../../images/logo.png";

const HomeNavbar = ({ toggle }) => {
  return (
    <>
      <NavbarContainer>
        <NavLogo to="/">
          <Logo src={logo}></Logo>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              About Us
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="pricing"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Pricing
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contact Us
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="guides"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Guides and Resources
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </>
  );
};

export default HomeNavbar;
