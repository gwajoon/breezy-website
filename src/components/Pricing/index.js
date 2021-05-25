import React from "react";
import {
  PricingContainer,
  PricingTopLine,
  PricingH1,
  PricingWrapper,
  PricingCard,
  PricingH2,
  Price,
  PricingList,
  PricingAction,
  PricingActionText,
} from "./PricingElements";

const Pricing = () => {
  return (
    <PricingContainer id="pricing">
      <PricingTopLine> Find the right plan for your business </PricingTopLine>
      <PricingH2>
        Join breezy today and you won't pay a single cent until you are ready
      </PricingH2>
      <PricingWrapper>
        <PricingCard>
          <PricingH1> Core</PricingH1>
          <Price>$39/mo</Price>
          <PricingH2>
            {" "}
            For smaller businesses, with simple salaries, wages and pay
            schedules.
          </PricingH2>
          <PricingList>Preparation & filing of annual return</PricingList>
          <PricingList>
            Appointment of director/corporate secretary/auditor
          </PricingList>
          <PricingList>it is a long esa</PricingList>
        </PricingCard>
        <PricingCard className="middle">
          <PricingH1> Basic</PricingH1>
          <Price></Price>
          <PricingH2>
            It is a long established fact that a reader will be distracted by{" "}
          </PricingH2>
          <Price> $10.00</Price>
          <PricingList>it is a long esa</PricingList>
          <PricingList>it is a long esa</PricingList>
          <PricingList>it is a long esa</PricingList>
          <PricingAction>
            <PricingActionText>Get started today</PricingActionText>
          </PricingAction>
        </PricingCard>
        <PricingCard>
          <PricingH1> Basic</PricingH1>
          <Price></Price>
          <PricingH2>
            {" "}
            It is a long established fact that a reader will be distracted by{" "}
          </PricingH2>
          <Price> $10.00</Price>
          <PricingList>it is a long esa</PricingList>
          <PricingList>it is a long esa</PricingList>
          <PricingList>it is a long esa</PricingList>
        </PricingCard>
      </PricingWrapper>
    </PricingContainer>
  );
};

export default Pricing;
