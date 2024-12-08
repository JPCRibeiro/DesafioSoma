import { HomeContainer, Logo } from "./Home.styled";
import sw_logo from "../../assets/star-wars-logo.png";
import movie from "../../assets/movie.jpg";
import character from "../../assets/character.png";
import starship from "../../assets/starship.png";
import planet from "../../assets/planet.png";
import specie from "../../assets/specie.png";
import vehicle from "../../assets/vehicle.png";
import CategoryLink from "../../components/CategoryLink";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home - Desafio Soma"
  }, [])

  return (
    <HomeContainer>
      <Logo src={sw_logo} alt="star wars logo"/>
      <h2>Descubra tudo sobre o universo de Star Wars</h2>
      <p>Veja todas as informações sobre os filmes, personagens, planetas, espécies, espaçonaves e veículos!</p>  
      <section>
        <CategoryLink label="Filmes" to="filmes" imgSrc={movie} altText="Banner do Filme"/>
        <CategoryLink label="Personagens" to="personagens" imgSrc={character} altText="C-3PO e R2-D2"/>
        <CategoryLink label="Planetas" to="planetas" imgSrc={planet} altText="Estrela da Morte"/>
        <CategoryLink label="Espécies" to="especies" imgSrc={specie} altText="Jabba"/>
        <CategoryLink label="Espaçonaves" to="espaconaves" imgSrc={starship} altText="Millenium Falcon"/>
        <CategoryLink label="Veículos" to="veiculos" imgSrc={vehicle} altText="AT-ST"/>
      </section>
    </HomeContainer>
  )
}