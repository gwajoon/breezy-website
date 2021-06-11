import styled from "styled-components";

export const Container = styled.div`
  min-height: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.div`
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 54px;
  color: #1d1d44;
  margin: 5px;
`;

export const H2 = styled.div`
  font-family: Nunito;
  font-weight: 400px;
  font-size: 30px;
  color: #1d1d44;
`;

export const Line = styled.h1`
  display: block;
  margin: 0 auto;
  width: 30%;
  padding-top: 20px;
  border-bottom: 6px solid #f59f0a;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  background: #f9f4ec;
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
  width: 540px;
  height: 440px;
  margin: 16px;
  padding: 40px;
`;

export const Icon = styled.img`
  width: 130px;
  height: 130px;
  margin-top: 30px;
`;

export const Title = styled.div`
  font-family: Nunito;
  font-size: 30px;
  font-weight: 600;
  width: 400px;
`;

export const P = styled.p`
  font-family: Nunito;
  font-size: 18px
  font-weight: 400;
  color: #1d1d1d;
`;
