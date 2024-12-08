import { Outlet } from "react-router-dom";
import { LogoLink, MenuHam, MobileNavList, Navbar, NavList, NavListLink } from "./Header.styled";
import sw_logo from "../../assets/star-wars-logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <>
      <Navbar>
        <LogoLink to="/">
          <img src={sw_logo} alt="star wars logo" width="120"/>
        </LogoLink>
        <NavList>
          <NavListLink to="filmes">Filmes</NavListLink>
          <NavListLink to="personagens">Personagens</NavListLink>
          <NavListLink to="planetas">Planetas</NavListLink>
          <NavListLink to="especies">Espécies</NavListLink>
          <NavListLink to="espaconaves">Espaçonaves</NavListLink>
          <NavListLink to="veiculos">Veículos</NavListLink>
        </NavList>
        <MenuHam icon={faBars} onClick={toggleMenu}/>
        <MobileNavList $isMenuOpen={isMenuOpen}>
          <NavListLink to="filmes" onClick={toggleMenu}>
            Filmes
          </NavListLink>
          <NavListLink to="personagens" onClick={toggleMenu}>
            Personagens
          </NavListLink>
          <NavListLink to="planetas" onClick={toggleMenu}>
            Planetas
          </NavListLink>
          <NavListLink to="especies" onClick={toggleMenu}>
            Espécies
          </NavListLink>
          <NavListLink to="espaconaves" onClick={toggleMenu}>
            Espaçonaves
          </NavListLink>
          <NavListLink to="veiculos" onClick={toggleMenu}>
            Veículos
          </NavListLink>
        </MobileNavList>
      </Navbar>
      <Outlet/>
    </>
  )
}