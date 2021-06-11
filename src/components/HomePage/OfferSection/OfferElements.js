import styled from "styled-components";

export const OfferContainer = styled.div`
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

export const OfferWrapper = styled.div`
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

export const OfferCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: left;
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

export const OfferIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;

export const OfferH1 = styled.h1`
  font-size: 40px;
  font-family: Nunito, sans-serif;
  margin: 40px 0;
`;

export const Line = styled.h1`
  display: block;
  margin: 0 auto;
  width: 40%;
  padding-top: 20px;
  border-bottom: 6px solid #f59f0a;
`;

export const OfferHeading = styled.h2`
  height: 60px;
  font-size: 24px;
  margin: 10px 0;
  font-family: Nunito;
  font-weight: 700;
`;

export const OfferP = styled.p`
  font-size: 14px;
  font-family: Nunito;
  font-weight: 300;
  margin-top: 10px;
`;

export const OfferBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;
