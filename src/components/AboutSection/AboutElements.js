import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #f8f5f2;
  display: flex;
  height: 700px;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 1200px;
    width: 850px;
    flex-direction: column;
  }
`;

export const AboutContent = styled.div`
  align-items: center;
  justify-content: center;
  margin-left: 900px;
  position: absolute;

  @media screen and (max-width: 480px) {
    margin-left: 0;
    margin-bottom: 200px;
  }
`;

export const AboutHeading = styled.h1`
  color: black;
  margin: 16px;
  font-size: 28px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const AboutP = styled.p`
  margin: 16px;
  color: #404344;
  font-size: 18px;
  font-family: Roboto, sans-serif;
  text-align: left;
  max-width: 700px;
  white-space: pre-wrap;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  padding-left: 20px;
  margin-left: 250px;
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
  width: 1000px;
  border-radius: 25%;
  margin-right: 700px;
  
  @media screen and (max-width: 768px) {
    width: 800px;  
    margin-top: 800px;
    margin-right: 0;
    opacity: 100%;
  }
`;
