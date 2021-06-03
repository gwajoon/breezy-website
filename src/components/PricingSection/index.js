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
  PricingIcon,
} from "./PricingElements";
import { Button } from "../ButtonElements";
import search from "../../images/search.svg";

const Pricing = () => {
  return (
    <PricingContainer id="pricing">
      <PricingTopLine> Find the right plan for your business </PricingTopLine>
      <PricingH2>
        Join breezy today and you won't pay a single cent until you are ready
      </PricingH2>
      <PricingWrapper>
        <PricingCard>
          <PricingH1> Basic</PricingH1>
          <Price>$400 / 2 shareholders</Price>
          <PricingH2>
            We believe in a relationship, not one where you pay every time you
            pick up the phone. Pay one yearly fee and get unlimited access to
            the following common services.
          </PricingH2>
          <PricingList>
            Preparation & filing of annual return (Inclusive of $60 ACRA fee){" "}
          </PricingList>
          <PricingList>
            {" "}
            Appointment of director/ corporate secretary/ auditor
          </PricingList>
          <PricingList>
            Resignation of director/ corporate secretary/ auditor
          </PricingList>
          <PricingList>Change in officer's particulars</PricingList>
          <PricingList>Change of company name</PricingList>
          <PricingList>Change of registered business address</PricingList>
          <PricingList>Holding of AGM and filing of annual return </PricingList>
          <PricingList>Declaration and distribution of dividends </PricingList>
          <PricingList>Change of financial year end</PricingList>
          <PricingList>
            Change of principal business activities (SSIC codes){" "}
          </PricingList>
          <PricingList>
            Share issuance and transfer (Ordinary & Preference)
          </PricingList>
          <PricingH2>
            Our yearly fee excludes the following activities. We can assist you
            as needed.
          </PricingH2>
          <PricingList style={{ color: "#f59f0a" }}>
            Strike-off: $500
          </PricingList>
          <PricingList style={{ color: "#f59f0a" }}>
            Any ACRA late filing fees and penalties
          </PricingList>
          <PricingAction
            style={{
              bottom: "0",
              width: "100%",
              position: "absolute",
              "border-radius": "0 0 10px 10px",
            }}
          >
            <PricingActionText>Get started today</PricingActionText>
          </PricingAction>
        </PricingCard>
        <PricingCard
          style={{ "justify-content": "center", "align-items": "center" }}
        >
          <PricingH1 style={{ margin: "0" }}>
            {" "}
            Need other adhoc requirements?{" "}
          </PricingH1>
          <PricingH1> Please contact us </PricingH1>
          <PricingIcon src={search} />
          <Button
            style={{ width: "300px", "border-radius": "5px" }}
            smooth
            to="contact"
          >
            {" "}
            Contact us for more information
          </Button>
        </PricingCard>
      </PricingWrapper>
    </PricingContainer>
  );
};

export default Pricing;
