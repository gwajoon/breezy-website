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
  NavRouter,
} from "./NavbarElements";
import logo from "../../images/logo.png";

const OtherNavbar = ({ toggle }) => {
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
              <NavRouter to="/">Home</NavRouter>
            </NavItem>
            <NavItem>
              <NavRouter to="pricing">Pricing</NavRouter>
            </NavItem>
            <NavItem>
              <NavRouter to="contact">Contact Us</NavRouter>
            </NavItem>
            <NavItem>
              <NavRouter to="guides">Guides and Resources</NavRouter>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default OtherNavbar;
