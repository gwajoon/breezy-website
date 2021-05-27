import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f5f2;

  @media screen and (max-width: 700px) {
    height: 1700px;
    width: 770px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

export const ServicesHeading = styled.h2`
  height: 60px;
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
  font-family: Roboto, sans-serif;
`;

export const ServicesP = styled.p`
  font-size: 14px;
  text-align: center;
  font-family: Roboto, sans-serif;
`;

export const ServicesBtnWrap = styled.div`
  margin-top: 32px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;
