import React from "react";
import Icon1 from "../../images/card1.svg";
import Icon2 from "../../images/card2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesHeading,
  ServicesP,
  ServicesBtnWrap,
} from "./ServicesElements";
import { Button } from "../ButtonElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesHeading> Digital Incorporation </ServicesHeading>
          <ServicesP>
            {" "}
            Get your company registered fast and online, and fast-tracked to a
            business account. All government fees and must-have services are
            included, for foreigners and Singapore locals.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon2}
            style={{ height: "200px", width: "200px" }}
          />
          <ServicesHeading> Online Corporate Secretary</ServicesHeading>
          <ServicesP>
            {" "}
            Your compliance in check. We track deadlines, file documents, and
            answer questions daily. All standard resolutions and routine filings
            are included in the plan.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} style={{ height: "180px" }} />
          <ServicesHeading> Accounting and Taxation Advisory</ServicesHeading>
          <ServicesP>
            {" "}
            A personal Chartered Accountant who gets to know your business:
            files reports, optimises tax, and keeps books tamed. Get solutions
            for your industry and forget manual labour.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <ServicesBtnWrap>
        <Button to="pricing" style={{ "text-decoration": "none" }}>
          {" "}
          Pricing{" "}
        </Button>
      </ServicesBtnWrap>
    </ServicesContainer>
  );
};

export default Services;
