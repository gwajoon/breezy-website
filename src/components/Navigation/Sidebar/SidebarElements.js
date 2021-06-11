import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #1d1d44;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  postion: absolute;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 250px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #f9a825;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
    margin: 50px;
  }
`;

export const SidebarRoute = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #f9a825;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
    margin: 50px;
  }
`;
