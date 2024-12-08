import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { CardBox } from "../../components/ApiPageLayout/ApiPageLayout.styled";
import GenerateCardButton from "../../components/GenerateCardButton";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../../components/ApiPageLayout";

export default function PlanetaPage() {
  const { data: planets, isLoading } = useFetchData("https://swapi.dev/api/planets/");
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    document.title = "Planetas - Desafio Soma"
  }, [])

  return (
    <PageLayout title="Planetas" subtitle="Clique no botão para ver as informações de um planeta aleatório de Star Wars!" icon={faGlobe} isLoading={isLoading}>
      <CardBox>
        <GenerateCardButton category={planets} setCategoryData={setPlanetData}/>
        {planetData && (
          <div>
            <h3>{planetData.name}</h3>
            <h4>Período de Rotação</h4>
            <p>{planetData.rotation_period}</p>
            <h4>Período de Órbita</h4>
            <p>{planetData.orbital_period}</p>
            <h4>Diâmetro</h4>
            <p>{planetData.diameter}</p>
            <h4>Clima</h4>
            <p>{planetData.climate}</p>
            <h4>Gravidade</h4>
            <p>{planetData.gravity}</p>
            <h4>Terreno</h4>
            <p>{planetData.terrain}</p>
            <h4>População</h4>
            <p>{planetData.population}</p>
          </div>
        )}
      </CardBox>
    </PageLayout>
  )
}