import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = styled.header`
  background-color: var(--secondary-color);
  width: 100%;
  box-shadow: inset 0 0 0 0 #1f1f1fa8, 0 0 10px #000000bf, 0 0 10px #000000bf;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 90px;
  position: relative;
  z-index: 999;
`;

export const LogoLink = styled(Link)`
  display: flex;
`

export const NavList = styled.div`
  list-style: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const NavListLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: white;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0px;
    height: 3px;
    bottom: -5px;
    background-color: var(--primary-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.15s ease-in;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

export const MenuHam = styled(FontAwesomeIcon)`
  display: none;

  @media screen and (max-width: 860px) {
    display: block;
    font-size: 24px;
  }
`

export const MobileNavList = styled.div`
  position: absolute;
  transition: 200ms;
  top: 90px;
  right: 0;
  width: 100%;
  background-color: var(--secondary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")}; 
  flex-direction: column;
  align-items: center;
  z-index: 998;
  text-align: center;

  a {
    padding: 10px 20px;
    text-decoration: none;
    font-size: 18px;
    color: white;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--primary-color);
    }

    &::after {
      width: 100%;
      bottom: 0px;
    }
  }

  @media screen and (min-width: 860px) {
    display: none;
  }
`;
