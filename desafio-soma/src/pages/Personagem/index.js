import { useEffect, useState } from "react";
import { CardBox } from "../../components/ApiPageLayout/ApiPageLayout.styled";
import GenerateCardButton from "../../components/GenerateCardButton";
import { useFetchData } from "../../hooks/useFetchData";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../../components/ApiPageLayout";

export default function PersonagemPage() {
  const { data: people, isLoading } = useFetchData("https://swapi.dev/api/people/");
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    document.title = "Personagens - Desafio Soma"
  }, [])

  return (
    <PageLayout title="Personagens" subtitle="Clique no botão para ver as informações de um personagem aleatório de Star Wars!" icon={faUserLarge} isLoading={isLoading}>
      <CardBox>
        <GenerateCardButton category={people} setCategoryData={setCharacterData}/>
        {characterData && (
          <div>
            <h3>{characterData.name}</h3>
            <h4>Altura</h4>
            <p>{characterData.height} cm</p>
            <h4>Massa</h4>
            <p>{characterData.mass} kg</p>
            <h4>Cor do Cabelo</h4>
            <p>{characterData.hair_color}</p>
            <h4>Cor da Pele</h4>
            <p>{characterData.skin_color}</p>
            <h4>Cor dos Olhos</h4>
            <p>{characterData.eye_color}</p>
            <h4>Data de Nascimento</h4>
            <p>{characterData.birth_year}</p>
            <h4>Gênero</h4>
            <p>{characterData.gender}</p>
          </div>
        )}
      </CardBox>
    </PageLayout>
  )
}