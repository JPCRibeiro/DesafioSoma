import { useEffect, useState } from "react";
import GenerateCardButton from "../../components/GenerateCardButton";
import { CardBox } from "../../components/ApiPageLayout/ApiPageLayout.styled";
import { useFetchData } from "../../hooks/useFetchData";
import { faDna } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../../components/ApiPageLayout";

export default function EspeciesPage() {
  const { data: species, isLoading } = useFetchData("https://swapi.dev/api/species/");
  const [specieData, setSpecieData] = useState(null);

  useEffect(() => {
    document.title = "Espécies - Desafio Soma"
  }, [])

  return (
    <PageLayout title="Espécies" subtitle="Clique no botão para ver as informações de uma espécie aleatória de Star Wars!" icon={faDna} isLoading={isLoading}>
      <CardBox>
        <GenerateCardButton category={species} setCategoryData={setSpecieData}/>
        {specieData && (
          <div>
          <h3>{specieData.name}</h3>
          <h4>Classificação</h4>
          <p>{specieData.classification}</p>
          <h4>Designação</h4>
          <p>{specieData.designation}</p>
          <h4>Altura Média</h4>
          <p>{specieData.average_height}</p>
          <h4>Cores da Pele</h4>
          <p>{specieData.skin_colors}</p>
          <h4>Cores do Cabelo</h4>
          <p>{specieData.hair_colors}</p>
          <h4>Cores dos Olhos</h4>
          <p>{specieData.eye_colors}</p>
          <h4>Vida média</h4>
          <p>{specieData.average_lifespan}</p>
          <h4>Linguagem</h4>
          <p>{specieData.language}</p>
        </div>
        )}
      </CardBox>
    </PageLayout>
  )
}