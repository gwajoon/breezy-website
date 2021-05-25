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
            <Label>
              <PhoneIcon />
              <IconLabel>breezy@breeze.com</IconLabel>
            </Label>
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.824985635592!2d103.83952795118546!3d1.2785504990628904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19895d718f9b%3A0xa17742dff878f090!2sShake%20Shack%2089%20Neil%20Road!5e0!3m2!1sen!2ssg!4v1621851261879!5m2!1sen!2ssg"
              margin="20"
              width="350"
              height="270"
              frameBorder="0"
            ></iframe>
          </Column2>
        </ContactContent>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactSection;
