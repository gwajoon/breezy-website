import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #f8f5f2;
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
`;

export const AboutContent = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px;
  grid-area: col2;
`;

export const AboutHeading = styled.h1`
  color: black;
  margin: 16px;
  font-size: 28px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  margin: 16px;
  color: #404344;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  max-width: 700px;
  white-space: pre-wrap;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AboutBtnWrapper = styled.div`
  margin-top: 32px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

export const ImgWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 25px;
`;

export const Img = styled.img`
  width: 500px;
  border-radius: 25%;
`;
