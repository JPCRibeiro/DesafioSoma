import { Outlet } from "react-router-dom";
import { Navbar, NavList, NavListLink } from "./Header.styled";

export default function Header() {
  return (
    <>
      <Navbar>
        <NavList>
          <NavListLink to="filmes">Filmes</NavListLink>
          <NavListLink to="personagens">Personagens</NavListLink>
          <NavListLink to="planetas">Planetas</NavListLink>
          <NavListLink to="especies">Espécies</NavListLink>
          <NavListLink to="espaconaves">Espaçonaves</NavListLink>
          <NavListLink to="veiculos">Veículos</NavListLink>
        </NavList>
      </Navbar>
      <Outlet/>
    </>
  )
}