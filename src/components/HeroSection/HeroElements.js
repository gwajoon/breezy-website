import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #161637;
  display: flex;
  height: 700px;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
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

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 200px;
  }
`;

export const HeroHeading = styled.div`
  font-size: 48px;
  text-align: center;
  padding: 8px 24px;
  color: #fff;
  font-family: "Playfair Display";
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const HeroH1 = styled.div`
  color: #f59f0a;
  font-size: 24px;
  text-align: center;
  padding: 8px 24px;
  font-family: "Playfair Display";
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  padding: 8px 24px;
  font-size: 18px;
  text-align: center;
  max-width: 1100px;
  font-family: Roboto;
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
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 500px;
    height: 450px;
    width: 900px;
  }
`;
