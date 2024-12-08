import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { CardBox } from "../../components/ApiPageLayout/ApiPageLayout.styled";
import GenerateCardButton from "../../components/GenerateCardButton";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../../components/ApiPageLayout";

export default function EspaconavePage() {
  const { data: starships, isLoading } = useFetchData("https://swapi.dev/api/starships/");
  const [startshipData, setStarshipData] = useState(null);

  useEffect(() => {
    document.title = "Espaçonaves - Desafio Soma"
  }, [])

  return (
    <PageLayout title="Espaçonaves" subtitle="Clique no botão para ver as informações de uma espaçonave aleatória de Star Wars!" icon={faRocket} isLoading={isLoading}>
      <CardBox>
        <GenerateCardButton category={starships} setCategoryData={setStarshipData}/>
        {startshipData && (
          <div>
            <h3>{startshipData.name}</h3>
            <h4>Modelo</h4>
            <p>{startshipData.model}</p>
            <h4>Fabricante</h4>
            <p>{startshipData.manufacturer}</p>
            <h4>Valor</h4>
            <p>{startshipData.cost_in_credits}</p>
            <h4>Comprimento</h4>
            <p>{startshipData.length}</p>
            <h4>Velocidade Atmosférica Máxima</h4>
            <p>{startshipData.max_atmosphering_speed}</p>
            <h4>Equipe</h4>
            <p>{startshipData.crew}</p>
            <h4>Passageiros</h4>
            <p>{startshipData.passengers}</p>
          </div>
        )}
      </CardBox>
    </PageLayout>
  )
}