import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #f8f5f2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 900px;
  width: 100%;
  padding: 0 30px;

  @media screen and (max-width: 768px) {
  }
`;

export const AboutWrapper = styled.div`
  align-items: center;
  justify-content: center;
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100%;

  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 200px;
  }
`;

export const AboutContent = styled.div`
  align-items: center;
  justify-content: center;
`;

export const AboutHeading = styled.h1`
  color: black;
  margin: 16px;
  font-size: 28px;
  text-align: center;
  font-family: "serif";
`;

export const AboutP = styled.p`
  margin: 16px;
  color: #404344;
  font-size: 18px;
  font-family: Nunito, sans-serif;
  font-weight: 300;
  text-align: left;
  max-width: 700px;
  white-space: pre-wrap;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  margin-left: 15px;
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
  width: 700px;
  border-radius: 20%;

  @media screen and (max-width: 960px) {
    width: 500px;
    margin-right: 0;
  }
`;
