import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Router } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const Button = styled(Link)`
  border-radius: 10px;
  height: 60px;
  background: #f9a825;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  font-family: Nunito, sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    font-size: 25px;
  }
`;

export const ButtonRouter = styled(Router)`
  border-radius: 10px;
  height: 60px;
  width: 300px;
  background: #f9a825;
  white-space: nowrap;
  padding: 12px 30px;
  margin: 10px;
  color: #fff;
  font-size: 16px;
  font-family: Nunito, sans-serif;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1d1d44;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    height: 80px;
    width: 560px;
    font-size: 20px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
