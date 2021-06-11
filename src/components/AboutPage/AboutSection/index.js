import React, { useState } from "react";
import {
  AboutContainer,
  AboutContent,
  AboutHeading,
  AboutP,
  AboutWrapper,
  ImgWrap,
  Img,
  AboutBtnWrapper,
  Line,
} from "./AboutElements";
import { ButtonRouter, ArrowForward, ArrowRight } from "../../ButtonElements";
import aboutPic from "../../../images/Image/group.jpg";

const AboutSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutHeading>
            About Breezy <Line />
          </AboutHeading>
          <AboutContent>
            <AboutP>
              Breezy mission is to make lives of business owners a breeze. We
              incorporate companies in Singapore, and help them manage their
              governance, accounting and tax matters using technology. We
              started Breezy because we were frustrated at how slow and
              paper-based the incorporation and company registration process
              was.
            </AboutP>
            <AboutP>
              Since inception, we have incorporated hundreds of happy companies
              as we offer 100% digital company incorporation services, company
              secretary, and accounting services in Singapore.
            </AboutP>
            <AboutP>
              We are an ACRA-certified Filing Agent, member of the Singapore
              Corporate Secretary Association, and an affiliated with the
              Institute of Singapore Chartered Accountants.
            </AboutP>
            <AboutBtnWrapper>
              <ButtonRouter
                smooth
                to="/"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              >
                Services {hover ? <ArrowForward /> : <ArrowRight />}
              </ButtonRouter>
            </AboutBtnWrapper>
          </AboutContent>
        </AboutWrapper>
      </AboutContainer>
      <ImgWrap>
        <Img src={aboutPic} />
      </ImgWrap>
    </>
  );
};

export default AboutSection;
