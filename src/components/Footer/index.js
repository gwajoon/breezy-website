import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterContentContainer,
  FooterContentWrapper,
  FooterContentItems,
  FooterContentTitle,
  FooterContent,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLinks,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialLogo to="/">breezy</SocialLogo>
        <FooterContentContainer>
          <FooterContentWrapper>
            <FooterContentItems>
              <FooterContentTitle>Address</FooterContentTitle>
              <FooterContent> 123 Sentosa Way </FooterContent>
            </FooterContentItems>
            <FooterContentItems>
              <FooterContentTitle>Content</FooterContentTitle>
              <FooterContent> Phone: +65 9992 2225</FooterContent>
              <FooterContent> Email: breezy@breeze.sg</FooterContent>
            </FooterContentItems>
          </FooterContentWrapper>
        </FooterContentContainer>
      </FooterWrap>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights> Breezy © 2021 All rights reserved.</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
