import React from "react";
import {
  TeamContainer,
  TeamHeading,
  TeamWrapper,
  TeamContent,
  TeamImg,
  TeamTitle,
  TeamDescription,
  Line,
} from "./TeamElements";

import pic from "../../../images/IconSmall/call.png";

const TeamSection = () => {
  return (
    <TeamContainer>
      <TeamHeading>
        Our Team
        <Line />
      </TeamHeading>
      <TeamWrapper>
        <TeamContent>
          <TeamImg src={pic} />
          <TeamTitle>Walter Oh</TeamTitle>
          <TeamDescription>CEO</TeamDescription>
        </TeamContent>
        <TeamContent>
          <TeamImg src={pic} />
          <TeamTitle>Walter Oh</TeamTitle>
          <TeamDescription>CEO</TeamDescription>
        </TeamContent>
        <TeamContent>
          <TeamImg src={pic} />
          <TeamTitle>Walter Oh</TeamTitle>
          <TeamDescription>CEO</TeamDescription>
        </TeamContent>
      </TeamWrapper>
      <TeamWrapper>
        <TeamContent>
          <TeamImg src={pic} />
          <TeamTitle>Walter Oh</TeamTitle>
          <TeamDescription>CEO</TeamDescription>
        </TeamContent>
        <TeamContent>
          <TeamImg src={pic} />
          <TeamTitle>Walter Oh</TeamTitle>
          <TeamDescription>CEO</TeamDescription>
        </TeamContent>
        <TeamContent>
          <TeamImg src={pic} />
          <TeamTitle>Walter Oh</TeamTitle>
          <TeamDescription>CEO</TeamDescription>
        </TeamContent>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default TeamSection;
