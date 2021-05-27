import styled from "styled-components";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const ContactContainer = styled.div`
  height: 800px;
  background: #f8f5f2;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 480px) {
    width: 650px;
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
  height: 550px;
  width: 1000px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 100px;
  justify-content: center;
  box-shadow: 2px 2px 7px grey;

  @media screen and (max-width: 480px) {
    height: 650px;
    width: 300px;
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
    width: 200px;
  }
`;

export const Column2 = styled.div`
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    margin-left: 40px;
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
    font-size: 14px;
  }
`;

export const GPSIcon = styled(FaMapMarkerAlt)`
  color: #f45d48;
  grid-area: col2;
  float: left;
  height: 20px;

  @media screen and (max-width: 480px) {
    height: 16px;
  }
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  color: #f45d48;
  grid-area: col2;
  float: left;
  height: 20px;

  @media screen and (max-width: 480px) {
    height: 16px;
  }
`;

export const MailIcon = styled(FaEnvelope)`
  grid-area: col2;
  color: #f45d48;
  float: left;
  height: 20px;

  @media screen and (max-width: 480px) {
    height: 16px;
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
    width: 240px;
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
    width: 240px;
  }
`;

export const Whatsapp = styled.div `
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
