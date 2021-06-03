import styled from "styled-components";
import { Link } from "react-router-dom";

export const PricingContainer = styled.div`
  min-height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #161637;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 1800px;
  }
`;

export const PricingWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 1500px;
  }
`;

export const PricingCard = styled.div`
  background: #fff;
  display: flex;
  width: 500px;
  flex-direction: column;
  border-radius: 10px;
  height: 750px;
  box-shadow: 0 1px 3px;
  transition: all 0.2s ease-in-out;
  margin: 16px 30px;
  position: relative;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const PricingTopLine = styled.h1`
  color: #fff;
  font-size: 24px;
  font-family: Nunito;
  font-weight: 400;
`;

export const PricingH1 = styled.h1`
  font-size: 20px;
  margin: 16px 24px;
  font-family: Nunito;
  font-weight: 400;
`;

export const PricingH2 = styled.p`
  font-size: 13px;
  margin: 24px;
  font-family: Nunito;
  font-weight: 300;
  color: lightslategray;
`;

export const Price = styled.p`
  font-size: 24px;
  text-align: center;
  font-family: Nunito;
  font-weight: 400;
  color: #f59f0a;
`;

export const PricingList = styled.li`
  font-size: 13px;
  text-align: left;
  margin: 8px 24px;
  font-family: Nunito;
  font-weight: 300;
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
`;

export const PricingIcon = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: 10px;
`;
