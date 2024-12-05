import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.header`
  background-color: #010409;
  width: 100%;
  height: 60px;
  box-shadow: inset 0 0 0 0 #1f1f1fa8, 0 0 10px #000000bf, 0 0 10px #000000bf;
`

export const NavList = styled.div`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const NavListLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: white;
`