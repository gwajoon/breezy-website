import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesHeading,
  Line,
} from "./ServicesElements";
import digital from "../../../images/IconSmall/digital.png";
import call from "../../../images/IconSmall/call.png";
import speaker from "../../../images/IconSmall/speaker.png";
import address from "../../../images/IconSmall/address.png";
import money from "../../../images/IconSmall/money.png";
import visa from "../../../images/IconSmall/visa.png";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>
          Services include
          <Line />
        </ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={digital} />
            <ServicesHeading>Company Incorporation</ServicesHeading>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={call} />
            <ServicesHeading> Corporate Secretary</ServicesHeading>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={speaker} />
            <ServicesHeading>Nominee Director</ServicesHeading>
          </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={address} />
            <ServicesHeading>
              Registered Address & Digital Mailroom
            </ServicesHeading>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={money} />
            <ServicesHeading>Accounting & Bookkeeping</ServicesHeading>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={visa} />
            <ServicesHeading>Visa Application</ServicesHeading>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
