import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #f8f5f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 850px;
    height: 900px;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  margin-right: 700px;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 200px;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 48px;
  text-align: left;
  padding: 8px 24px;
  color: #f45d48;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const HeroH1 = styled.div`
  font-size: 18px;
  text-align: left;
  padding: 8px 24px;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HeroP = styled.p`
  padding: 8px 24px;
  font-size: 18px;
  text-align: left;
  max-width: 1100px;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

export const HeroImg = styled.img `
  height: 600px;
  width: 1200px;
  margin-left: 700px;
  
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 500px;
    height: 450px;
    width: 900px;
  }
`
