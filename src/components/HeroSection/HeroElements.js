import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #161637;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 1000px;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export const HeroHeading = styled.div`
  font-size: 48px;
  text-align: center;
  padding: 8px 24px;
  color: #fff;
  font-family: serif;
  font-weight: 400;
`;

export const HeroP = styled.p`
  color: #fff;
  padding: 8px 24px;
  font-size: 18px;
  text-align: center;
  max-width: 1100px;
  font-family: Nunito;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImg = styled.img`
  min-height: 100%;
  min-width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 200px;
  }
`;
