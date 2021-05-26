import React, { useState } from "react";
import {
  AboutContainer,
  AboutContent,
  AboutHeading,
  AboutP,
  Column1,
  Column2,
  ImgWrap,
  Img,
  AboutBtnWrapper,
} from "./AboutElements";
import { Button, ArrowForward, ArrowRight } from "../ButtonElements";

import Pic1 from "../../images/svg-1.svg";

const AboutSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <AboutContainer id="about">
      <Column1>
        <ImgWrap>
          <Img src={Pic1} />
        </ImgWrap>
      </Column1>
      <Column2>
        <AboutContent>
          <AboutHeading>About Breezy</AboutHeading>
          <AboutP>
            Breezy mission is to make lives of business owners a breeze. We
            incorporate companies in Singapore, and help them manage their
            governance, accounting and tax matters using technology. We started
            Breezy because we were frustrated at how slow and paper-based the
            incorporation and company registration process was.
          </AboutP>
          <AboutP>
            Since inception, we have incorporated hundreds of happy companies as
            we offer 100% digital company incorporation services, company
            secretary, and accounting services in Singapore.
          </AboutP>
          <AboutP>
            We are an ACRA-certified Filing Agent, member of the Singapore
            Corporate Secretary Association, and an affiliated with the
            Institute of Singapore Chartered Accountants.
          </AboutP>
          <AboutBtnWrapper>
            <Button smooth to="services" onMouseEnter={onHover} onMouseLeave={onHover}>
              Services {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </AboutBtnWrapper>
        </AboutContent>
      </Column2>
    </AboutContainer>
  );
};

export default AboutSection;
