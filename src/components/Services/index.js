import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
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
import { ButtonRouter } from "../ButtonElements";

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
          <ServicesIcon src={Icon2} />
          <ServicesHeading> Online Corporate Secretary</ServicesHeading>
          <ServicesP>
            {" "}
            Your compliance in check. We track deadlines, file documents, and
            answer questions daily. All standard resolutions and routine filings
            are included in the plan.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
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
        <ButtonRouter to="./pricing"> Pricing </ButtonRouter>
      </ServicesBtnWrap>
    </ServicesContainer>
  );
};

export default Services;