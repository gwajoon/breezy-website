import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
} from "./OtherSidebarElements";

const OtherSidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute to="home" onClick={toggle}>
            Home
          </SidebarRoute>
          <SidebarRoute to="pricing" onClick={toggle}>
            Pricing
          </SidebarRoute>
          <SidebarRoute to="contact" onClick={toggle}>
            Contact Us
          </SidebarRoute>
          <SidebarRoute to="guides" onClick={toggle}>
            Guides and Services
          </SidebarRoute>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default OtherSidebar;
