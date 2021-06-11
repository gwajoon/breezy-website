import React from "react";
import {
  OfferContainer,
  OfferH1,
  OfferWrapper,
  OfferCard,
  OfferIcon,
  OfferHeading,
  OfferP,
  OfferBtnWrap,
  Line,
} from "./OfferElements";
import Icon1 from "../../../images/IconSmall/digitalbig.png";
import Icon2 from "../../../images/IconSmall/callbig.png";
import Icon3 from "../../../images/IconSmall/moneybig.png";
import { Button } from "../../ButtonElements";

const OfferSection = () => {
  return (
    <OfferContainer id="offer">
      <OfferH1>
        {" "}
        What we offer
        <Line> </Line>
      </OfferH1>
      <OfferWrapper>
        <OfferCard>
          <OfferIcon src={Icon1} />
          <OfferHeading> Digital Incorporation </OfferHeading>
          <OfferP>
            {" "}
            Get your company registered fast and online, and fast-tracked to a
            business account. All government fees and must-have Offer are
            included, for foreigners and Singapore locals.
          </OfferP>
        </OfferCard>
        <OfferCard>
          <OfferIcon src={Icon2} />
          <OfferHeading> Online Corporate Secretary</OfferHeading>
          <OfferP>
            {" "}
            Your compliance in check. We track deadlines, file documents, and
            answer questions daily. All standard resolutions and routine filings
            are included in the plan.
          </OfferP>
        </OfferCard>
        <OfferCard>
          <OfferIcon src={Icon3} />
          <OfferHeading> Accounting and Taxation Advisory</OfferHeading>
          <OfferP>
            {" "}
            A personal Chartered Accountant who gets to know your business:
            files reports, optimises tax, and keeps books tamed. Get solutions
            for your industry and forget manual labour.
          </OfferP>
        </OfferCard>
      </OfferWrapper>
      <OfferBtnWrap>
        <Button smooth to="pricing" style={{ "text-decoration": "none" }}>
          {" "}
          Pricing{" "}
        </Button>
      </OfferBtnWrap>
    </OfferContainer>
  );
};

export default OfferSection;
