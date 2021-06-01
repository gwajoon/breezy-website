import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="pricing" onClick={toggle}>
            Pricing
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink to="guides" onClick={toggle}>
            Guides and Services
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
