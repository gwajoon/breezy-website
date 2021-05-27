import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 770px;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 900px;

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const FooterContentContainer = styled.div`
  display: flex;
  justify-content: center;

`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media screen and (max-width: 480px) {
    padding-top: 15px;
  }
`;

export const FooterContentItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterContentTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
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
  
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
  
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 480px) {
    margin-right: 0;
    padding-left: 50px;
    padding-top: 20px;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 16px;

  @media screen and (max-width: 480px) {
    margin: 8px;
  }
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
