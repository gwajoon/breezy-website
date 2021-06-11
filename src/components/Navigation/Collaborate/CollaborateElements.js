import styled from "styled-components";

export const CollaborateContainer = styled.div`
  min-height: 400px;
  width: 100%;
  background: #164f4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CollaborateHeading = styled.h1`
  margin: 16px;
  color: #fff;
  font-size: 34px;
  text-align: center;
  font-family: "Playfair Display";
  font-weight: 700;
`;

export const IconLabel = styled.div`
  font-size: 16px;
  text-align: center;
  grid-area: col2;
  margin-left: 20px;
  float: left;
  font-family: Nunito;
  font-weight: 300;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin: 10px 40px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: solid 1px white;
  width: 400px;
  font-family: Nunito;
  font-weight: 300;
  font-size: 20px;
  color: white;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormButton = styled.button`
  background: #f59f0a;
  padding: 12px 0;
  margin-top: 24px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: Nunito;
  font-weight: 300;
  color: #fff;
  cursor: pointer;
  width: 400px;
  grid-area: col1;
`;

export const SubmitMessage = styled.div`
  font-size: 20px;
  text-align: center;
  justify-items: center;
  font-family: Nunito;
  font-weight: 300;
  color: white;
  height: 50px;
  width: 400px;
  margin-top: 30px;
`;

export const ErrorMessage = styled.span`
  font-family: Nunito;
  font-weight: 300;
  color: red;
`;
