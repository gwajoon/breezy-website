import styled from "styled-components";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import React from "react";

export const ContactContainer = styled.div`
  height: 800px;
  background: #f8f5f2;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 480px) {
    width: 850px;
    height: 900px;
  }
`;

export const ContactHeading = styled.h1`
  top: 0;
  margin: 16px;
  font-size: 28px;
  text-align: center;
  font-family: Roboto;
  font-weight: 400;
`;

export const ContactForm = styled.div`
  height: 700px;
  width: 1000px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 100px;
  justify-content: center;
  box-shadow: 2px 2px 7px grey;

  @media screen and (max-width: 480px) {
    height: 800px;
    width: 500px;
    padding: 20px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  margin: 10px;
  width: 450px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 25px;
  }
`;

export const Column2 = styled.div`
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    margin-left: 25px;
  }
`;

export const Label = styled.div`
  margin: 15px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    margin: 8px;
  }
`;

export const IconLabel = styled.div`
  font-size: 16px;
  text-align: center;
  grid-area: col2;
  margin-left: 20px;
  float: left;
  font-family: Roboto;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const GPSIcon = styled(FaMapMarkerAlt)`
  color: #f45d48;
  grid-area: col2;
  float: left;
  height: 20px;

  @media screen and (max-width: 480px) {
    height: 20px;
  }
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  color: #f45d48;
  grid-area: col2;
  float: left;
  height: 20px;

  @media screen and (max-width: 480px) {
    height: 20px;
  }
`;

export const MailIcon = styled(FaEnvelope)`
  grid-area: col2;
  color: #f45d48;
  float: left;
  height: 20px;

  @media screen and (max-width: 480px) {
    height: 20px;
  }
`;

export const FormInput = styled.input`
  border: 1px solid #dbdbdc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  width: 400px;
  padding-bottom: ${({ big }) => (big ? "140px" : "10px")};
  grid-area: col1;

  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

export const FormButton = styled.button`
  background: #f45d48;
  padding: 12px 0;
  margin-top: 24px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  width: 400px;
  grid-area: col1;

  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

export const Whatsapp = styled.div `
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const SubmitMessage = styled.div `
  font-size: 20px;
  text-align: center;
  justify-items: center;
  font-family: Roboto;
  color: black;
  height: 50px;
  width: 400px;
  margin-top: 30px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
