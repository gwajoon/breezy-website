import React from "react";
import {
  Container1,
  Header,
  Line,
  Container2,
  H1,
  H2,
  Container3,
  Wrapper,
  ButtonWrapper,
  Content,
  Card,
  Icon,
  Title,
  P,
} from "./AccountingElements";
import { ButtonRouter } from "../ButtonElements";
import expert from "../../images/IconSmall/expert.jpg";
import question from "../../images/IconSmall/question.jpg";
import pricetag from "../../images/IconSmall/pricetag.jpg";

const AccountingSection = () => {
  return (
    <>
      <Container1>
        <Header>
          {" "}
          Accounting
          <Line />
        </Header>
      </Container1>
      <Container2>
        <Content>
          <H1 style={{ "text-align": "left", width: "auto" }}>
            {" "}
            We file your accounting report painlessly
          </H1>
          <H2>
            {" "}
            Fever free accounting services: we put together paperwork, check
            numbers, and file annual returns on time. Chartered Accountants
            answer fast and help optimise tax.{" "}
          </H2>
          <ButtonWrapper>
            <ButtonRouter style={{ "margin-left": "15px" }}>
              {" "}
              <P>Get Started</P>
            </ButtonRouter>
            <ButtonRouter
              style={{
                "margin-left": "20px",
                background: "#fff",
                border: "2px solid #f9a825",
              }}
            >
              {" "}
              <P style={{ color: "#f9a825" }}>Contact Us</P>
            </ButtonRouter>
          </ButtonWrapper>
        </Content>
      </Container2>
      <Container3>
        <H1> We do afffordable online accounting for busy founders</H1>
        <Wrapper>
          <Card>
            <Icon src={expert} />
            <Title>An expert who has your back</Title>
            <P>
              A chartered Accountant will review your books, help receive
              reliefs and exemptions, compile reports and file them on time
            </P>
          </Card>
          <Card>
            <Icon src={question} />
            <Title>No manual labour</Title>
            <P>
              We'll take over your invoices, receipts and bank statements in any
              format. We then sort, match them and prepare reports
            </P>
          </Card>
          <Card>
            <Icon src={pricetag} />
            <Title>No-tricks pricing</Title>
            <P>
              We charge a flat fee that covers a financial statements, tax
              filing and management reports. Bookkeeping is included too, so you
              don'y have to deal with it
            </P>
          </Card>
        </Wrapper>
      </Container3>
    </>
  );
};

export default AccountingSection;
