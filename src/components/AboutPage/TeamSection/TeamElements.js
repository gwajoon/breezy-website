import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f4ec;
  width: 100%;
  min-height: 800px;

  @media screen and (max-width: 960px) {
    height: 2000px;
`;

export const TeamHeading = styled.div`
  height: 60px;
  font-size: 24px;
  text-align: center;
  margin: 10px 0;
  font-family: Nunito;
  font-weight: 500;
  color: #2e2e5f;
`;

export const Line = styled.div`
  display: block;
  margin: 0 auto;
  width: 70%;
  padding-top: 10px;
  border-bottom: 6px solid #f59f0a;
`;
export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 24px;
`;

export const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TeamImg = styled.img`
  display: flex;
  height: 200px;
  width: 200px;
  margin-top: 20px;
`;

export const TeamTitle = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: left;
  align-item: center;
  font-family: Nunito;
  font-weight: 500;
  margin-top: 16px;
`;

export const TeamDescription = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: left;
  align-item: center;
  font-family: Nunito;
  font-weight: 400;
  margin-top: 8px;
`;
