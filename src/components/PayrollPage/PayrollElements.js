import styled from "styled-components";

export const Container = styled.div`
  min-height: 1500px;
  width: 100%;
  background: linear-gradient(
    to bottom,
    #1d1d44 0%,
    #1d1d44 50%,
    #f9f4ec 50%,
    #f9f4ec 100%
  );
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  color: #fff;
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 54px;
  margin: 10px;
`;

export const Title = styled.div`
  color: #fff;
  font-family: Nunito;
  font-weight: 400;
  font-size: 30px;
  margin: 10px;
`;

export const Img = styled.img`
  height: 530px;
  width: 1050px;
  margin: 40px;
`;

export const Header2 = styled.div`
  font-family: "Playfair Display";
  color: #2e2e5f;
  font-weight: bold;
  font-size: 42px;
  margin: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
`;

export const Card = styled.div`
  height: 400px;
  width: 330px;
  background: #fff;
  text-align: center;
  display: grid;
  grid-template-column: 1fr 1fr 1fr;
  margin-top: 30px;
`;

export const Step = styled.div`
  color: grey;
  font-family: Nunito;
  font-size: 22px;
  padding-top: 50px;
  font-weight: 400;
`;

export const CardTitle = styled.div`
  color: #2e2e5f;
  font-family: Nunito;
  font-weight: 600;
  font-size: 30px;
  padding: 0 30px;
`;

export const Description = styled.div`
  color: #1d1d1d;
  font-family: Nunito;
  font-size: 18px;
  font-weight: 300;
  padding: 20px;
`;
