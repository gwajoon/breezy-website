import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #f8f5f2;
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 770px;
    flex-direction: column;
  }
`;

export const AboutContent = styled.div`
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const AboutHeading = styled.h1`
  color: black;
  margin: 16px;
  font-size: 28px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 250px;
    margin-top: 50px;
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
    font-size: 8px;
  }
`;

export const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-left: 250px;
    padding: 0;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 25px;
`;

export const Img = styled.img`
  width: 500px;
  border-radius: 25%;
  
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
