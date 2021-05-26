import React from "react";
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
} from "./ContactElements";
import QR from "../../images/qr-code.png"

const ContactSection = ({
  big = true,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
}) => {
  return (
    <ContactContainer id="contact">
      <ContactForm>
        <ContactHeading> Contact Us</ContactHeading>{" "}
        <ContactContent>
          <Column1>
            <FormInput placeholder="Name" />
            <FormInput placeholder="Email Address" />
            <FormInput placeholder="Contact Number" />
            <FormInput placeholder="Question" big={big} />
            <FormButton> Submit</FormButton>
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
            <IconLabel style={{"text-align": "left", margin: "30px 0 0 10px"}}>Scan here to contact us on WhatsApp:</IconLabel>
            <img src={QR} style={{height: "200px", width: "200px", margin: "15px 0 0 40px"}}/>
          </Column2>
        </ContactContent>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactSection;
