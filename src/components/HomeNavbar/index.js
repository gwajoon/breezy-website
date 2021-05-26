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
  NavRouter,
} from "./NavbarElements";
import logo from "../../images/logo.jpg";

const HomeNavbar = ({ toggle }) => {
  return (
    <>
      <Nav>
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
              <NavLinks to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true">
              Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavRouter to="pricing">Pricing</NavRouter>
            </NavItem>
            <NavItem>
              <NavRouter to="contact">Contact Us</NavRouter>
            </NavItem>
            <NavItem>
              <NavLinks to="guides"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        >Guides and Resources</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default HomeNavbar;
