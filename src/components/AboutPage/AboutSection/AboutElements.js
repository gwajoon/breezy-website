import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #f8f5f2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 700px;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const AboutWrapper = styled.div`
  justify-content: center;
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 150px 60px;
  grid-gap: 100px;

  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 200px;
    grid-gap: 50px;
  }
`;

export const AboutContent = styled.div`
  align-items: center;
  justify-content: center;
`;

export const AboutHeading = styled.h1`
  color: #2e2e5f;
  font-size: 32px;
  text-align: center;
  font-family: "Playfair Display";
  font-weight: 700;
`;

export const AboutP = styled.p`
  color: #404344;
  font-size: 18px;
  font-family: Nunito, sans-serif;
  font-weight: 300;
  text-align: left;
  max-width: 700px;
`;

export const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-left: 250px;
    padding-top: 15px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 25px;
`;

export const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 960px) {
    width: 500px;
    margin-right: 0;
  }
`;

export const Line = styled.h1`
  display: block;
  margin: 0 auto;
  width: 50%;
  padding-top: 20px;
  border-bottom: 6px solid #f59f0a;
`;
