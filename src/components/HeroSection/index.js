import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroHeading,
  HeroP,
  HeroBtnWrapper,
  HeroImg
} from "./HeroElements";
import { Button, ArrowForward, ArrowRight } from "../ButtonElements";
import Pic from "../../images/svg-2.svg"

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroImg src={Pic}/>
      <HeroContent>
        <HeroH1>Welcome to Breezy</HeroH1>
        <HeroHeading>
          Focus on growing your business and let us handle the boring stuff.
        </HeroHeading>
        <HeroP>
          Let us take care of the corporate compliances and accounting
          nightmare. We track compliance deadlines, file company resolutions and
          make sure you can operate your company at ease.
        </HeroP>
        <HeroBtnWrapper>
          <Button smooth to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
            Find out more {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
