import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f5f2;
  width: 100%;
  min-height: 800px;

  @media screen and (max-width: 960px) {
    height: 2000px;
  }
`;

export const ServicesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  min-width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 1500px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  height: 450px;
  width: 300px;
  padding: 40px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    width: 600px;
  }
`;

export const ServicesIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 40px;
  font-family: Nunito, sans-serif;
  margin: 50px 0;
`;

export const ServicesHeading = styled.h2`
  height: 60px;
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
  font-family: Nunito;
  font-weight: 400;
`;

export const ServicesP = styled.p`
  font-size: 14px;
  text-align: center;
  font-family: Nunito;
  font-weight: 300;
`;

export const ServicesBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;
