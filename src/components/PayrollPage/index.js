import React from "react";
import {
  Container,
  Header,
  Title,
  Img,
  Header2,
  CardWrapper,
  Card,
  Step,
  CardTitle,
  Description,
} from "./PayrollElements";
import { ButtonRouter } from "../ButtonElements";
import payroll from "../../images/Image/payroll.png";

const PayrollSection = () => {
  return (
    <>
      <Container>
        <Header>HR & Payroll</Header>
        <Title>Payroll that's easy to use</Title>
        <ButtonRouter to="/contact" style={{ width: "200px" }}>
          {" "}
          Get started
        </ButtonRouter>
        <Img src={payroll} />
        <Header2>How it works</Header2>
        <CardWrapper>
          <Card>
            <Step>Step 1</Step>
            <CardTitle>Run your payroll in minutes</CardTitle>
            <Description>
              Payroll shouldn't take hours. So we designed it to be easy. With
              just a few clicks, your team gets paid.
            </Description>
          </Card>
          <Card>
            <Step>Step 2</Step>
            <CardTitle>Your payroll taxes, filed automatically</CardTitle>
            <Description>
              We don't just calculate your taxes, we file them with the right
              government agencies every time you run payroll.
            </Description>
          </Card>
          <Card>
            <Step>Step 3</Step>
            <CardTitle>Customer Support</CardTitle>
            <Description>
              Help from people who care about your team.
            </Description>
          </Card>
        </CardWrapper>
      </Container>
    </>
  );
};

export default PayrollSection;
