import React, { useState } from "react";
import {
  ContactContainer,
  ContactHeading,
  ContactForm,
  ContactContent,
  Column1,
  Column2,
  Label,
  FormInput,
  FormButton,
  IconLabel,
  GPSIcon,
  MailIcon,
  PhoneIcon,
  Whatsapp,
  SubmitMessage
} from "./ContactElements";
import QR from "../../images/qr-code.png"

const ContactSection = ({
  big = true,
}) => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    question: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleNumberInputChange = (event) => {
    setValues({...values, number: event.target.value})
  }

  const handleQuestionInputChange = (event) => {
    setValues({...values, question: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name && values.number && values.email && values.question) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <ContactContainer id="contact">
      <ContactForm>
        <ContactHeading> Contact Us</ContactHeading>{" "}
        <ContactContent>
          <Column1>
            <FormInput
              onChange={handleNameInputChange}
              value={values.name}
              placeholder="Name"
              name="name"/>
            {submitted && !values.name ? <span style={{color: "red"}}> Please enter your name </span> : null}
            <FormInput
              onChange={handleEmailInputChange}
              value={values.email}
              placeholder="Email Address"
              name="email"/>
            {submitted && !values.email ? <span style={{color: "red"}}> Please enter your email address </span> : null}
            <FormInput
              onChange={handleNumberInputChange}
              value={values.number}
              placeholder="Contact Number"
              name="number"/>
            {submitted && !values.number ? <span style={{color: "red"}}> Please enter your contact number </span> : null}
            <FormInput
              onChange={handleQuestionInputChange}
              value={values.question}
              placeholder="Question" big={big}
              name="question"/>
            {submitted && !values.question ? <span style={{color: "red"}}> Please enter your question </span> : null}
            <FormButton onClick={handleSubmit}> Submit</FormButton>
            {submitted && valid ? <SubmitMessage>
              Thank you for contacting us, we will get back to you soon!
            </SubmitMessage> : null}
          </Column1>
          <Column2>
            <Label>
              <GPSIcon />
              <IconLabel>Sentosa Road 12</IconLabel>
            </Label>
            <Label>
              <MailIcon />
              <IconLabel> +65 66669999</IconLabel>
            </Label>
            <Label style={{}}>
              <PhoneIcon />
              <IconLabel>breezy@breeze.com</IconLabel>
            </Label>
            <Whatsapp>
              <IconLabel style={{"text-align": "left", margin: "30px 0 0 10px"}}>Scan here to contact us on WhatsApp:</IconLabel>
              <img src={QR} style={{height: "200px", width: "200px", margin: "15px 0 0 40px"}}/>
            </Whatsapp>
          </Column2>
        </ContactContent>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactSection;
