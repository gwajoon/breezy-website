import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const NavbarContainer = styled.div`
  background: #1d1d44;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  min-width: 1500px;
  width: 100%;
`;

export const NavLogo = styled(LinkRouter)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Logo = styled.img`
  height: 120px;
  width: 120px;
  justify-content: center;
  align-items: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Nunito;
  font-weight: 300;

  &.active {
    border-bottom: 6px solid #f59f0a;
  }
`;

export const NavRouter = styled(LinkRouter)`
  color: #fff;
  font-family: "Nunito":wght@300;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Nunito;
  font-weight: 300;

  &.active {
    border-bottom: 6px solid #f59f0a;
  }
`;
