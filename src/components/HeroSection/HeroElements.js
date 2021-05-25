import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #f8f5f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const HeroHeading = styled.h1`
  font-size: 48px;
  text-align: left;
  padding: 8px 24px;
  color: #f45d48;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH1 = styled.div`
  font-size: 18px;
  text-align: left;
  padding: 8px 24px;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroP = styled.p`
  padding: 8px 24px;
  font-size: 18px;
  text-align: left;
  max-width: 1100px;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;
