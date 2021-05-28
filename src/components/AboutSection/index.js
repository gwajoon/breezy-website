import React, { useState } from "react";
import {
  AboutContainer,
  AboutContent,
  AboutHeading,
  AboutP,
  ImgWrap,
  Img,
  AboutBtnWrapper,
} from "./AboutElements";
import { Button, ArrowForward, ArrowRight } from "../ButtonElements";

import aboutPic from "../../images/about.png";

const AboutSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <AboutContainer id="about">
        <ImgWrap>
          <Img src={aboutPic} />
        </ImgWrap>
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
    </AboutContainer>
  );
};

export default AboutSection;
