import React from "react";
import {
  Container,
  H1,
  H2,
  Line,
  Content,
  Card,
  Icon,
  Title,
  P,
} from "./CorporateElements";
import { ButtonRouter } from "../ButtonElements";
import idea from "../../images/IconSmall/idea.png";
import secretary from "../../images/IconSmall/secretary.png";
import calendar from "../../images/IconSmall/calendar.png";
import card from "../../images/IconSmall/card.png";

const CorporateSection = () => {
  return (
    <>
      <Container>
        <H1> Corporate Secretary</H1>
        <H2>
          Your documents done right, online and on time <Line />
        </H2>
        <Content>
          <Card>
            <Icon src={idea} />
            <Title>Bringing order to your document chaos</Title>
            <P>
              We track deadlines, file reports and make sure you don't have to
              worry about compliances
            </P>
          </Card>
          <Card>
            <Icon src={secretary} />
            <Title>Dedicated Secretary</Title>
            <P>
              Corporate secretary with yers of experience who knows your
              business and drafts your paper
            </P>
          </Card>
        </Content>
        <Content>
          <Card>
            <Icon src={calendar} />
            <Title>Deadlines calendar</Title>
            <P>
              We track deadlines, file reports and make sure you don't have to
              worry about compliances
            </P>
          </Card>
          <Card>
            <Icon src={card} />
            <Title>Resolutions in one place</Title>
            <P>
              We store all docs neatly and securely in your account so you neer
              have to go chasing them thorugh piles of papers or email chains
              again
            </P>
          </Card>
        </Content>
        <ButtonRouter to="/contact"> Get started</ButtonRouter>
      </Container>
    </>
  );
};

export default CorporateSection;
