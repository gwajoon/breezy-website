import styled from "styled-components";
import { Link } from "react-router-dom";

export const PricingContainer = styled.div`
  height: 1000px;
  display: flex;
  background: #161637;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: 2600px;
    width: 850px;
  }
`;

export const PricingWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PricingCard = styled.div`
  background: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  height: 750px;
  box-shadow: 0 1px 3px;
  transition: all 0.2s ease-in-out;
  margin-top: 16px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
    width: 750px;
    margin: 40px;
  }
`;

export const PricingTopLine = styled.h1`
  color: #fff;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const PricingH1 = styled.h1`
  font-size: 20px;
  margin: 16px 24px;
  font-family: Roboto;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const PricingH2 = styled.p`
  font-size: 13px;
  margin: 24px;
  font-family: Roboto;
  font-weight: 300;
  color: lightslategray;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Price = styled.p`
  font-size: 24px;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
  color: #f59f0a;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const PricingList = styled.li`
  font-size: 13px;
  text-align: left;
  margin: 8px 24px;
  font-family: Roboto;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PricingAction = styled(Link)`
  background: #f9a825;
  height: 50px;
  text-decoration: none;
`;

export const PricingActionText = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const PricingIcon = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: 10px;
`;
