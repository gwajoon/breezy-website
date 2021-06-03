import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 900px;
`;

export const FooterContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const FooterContentItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
`;

export const FooterContentTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterContent = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #f9a825;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 100px;
  align-self: flex-start;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;

export const SocialIconLinks = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
`;
