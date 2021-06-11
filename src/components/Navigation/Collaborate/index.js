import React, { useState } from "react";
import {
  CollaborateContainer,
  CollaborateHeading,
  FormInput,
  FormButton,
  SubmitMessage,
  ErrorMessage,
  Wrapper,
} from "./CollaborateElements";

const CollaborateSection = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleEmailInputChange = (event) => {
    setValues({ values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <CollaborateContainer>
      <CollaborateHeading>Collaborate with us</CollaborateHeading>
      <Wrapper>
        <FormInput
          onChange={handleEmailInputChange}
          value={values.question}
          placeholder="Enter your email"
          name="email"
        />
        <FormButton
          onClick={handleSubmit}
          style={{ width: "200px", "margin-bottom": "12px" }}
        >
          {" "}
          Contact Us
        </FormButton>
      </Wrapper>
      {submitted && !values.email ? (
        <ErrorMessage> Please enter your email </ErrorMessage>
      ) : null}
      {submitted && valid ? (
        <SubmitMessage>
          Thank you for contacting us, we will get back to you soon!
        </SubmitMessage>
      ) : null}
    </CollaborateContainer>
  );
};

export default CollaborateSection;
