import styled from "styled-components";

export const PricingContainer = styled.div`
  height: 700px;
  display: flex;
  background: #f8f5f2;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const PricingWrapper = styled.div`
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

export const PricingCard = styled.div`
  background: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: className="middle" ? 30px : 50px;
  border-radius: 10px;
  height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PricingTopLine = styled.div`
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PricingH1 = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PricingH2 = styled.p`
  font-size: 0.8rem;
  padding: 1rem;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const PricingList = styled.li`
  font-size: 1rem;
  text-align: center;
`;

export const PricingAction = styled.div`
  background: #696969;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-radius: 0 0 10px 10px;
`;

export const PricingActionText = styled.div`
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
`;
