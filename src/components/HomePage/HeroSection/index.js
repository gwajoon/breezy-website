import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroP,
  HeroBtnWrapper,
  HeroImg,
} from "./HeroElements";
import { Button, ArrowForward, ArrowRight } from "../../ButtonElements";
import homePic from "../../../images/Image/home.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroImg src={homePic} />
      <HeroContent>
        <HeroHeading>Focus on growing your business</HeroHeading>
        <HeroHeading>and let us handle the boring stuff.</HeroHeading>
        <HeroP>
          Let us take care of the corporate compliances and accounting
          nightmare.
        </HeroP>
        <HeroP>We track compliance deadlines, file company resolutions </HeroP>
        <HeroP>and make sure you can operate your company at ease.</HeroP>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <Button
            smooth
            to="offer"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Find out more {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
