import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { CardBox } from "../../components/ApiPageLayout/ApiPageLayout.styled";
import GenerateCardButton from "../../components/GenerateCardButton";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../../components/ApiPageLayout";

export default function VeiculoPage() {
  const { data: vehicles, isLoading } = useFetchData("https://swapi.dev/api/vehicles/");
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    document.title = "Veículos - Desafio Soma"
  }, [])

  return (
    <PageLayout title="Veículos" subtitle="Clique no botão para ver as informações as informações de um veículo aleatório de Star Wars!" icon={faCar} isLoading={isLoading}>
      <CardBox>
        <GenerateCardButton category={vehicles} setCategoryData={setVehicleData}/>
        {vehicleData && (
          <div>
            <h3>{vehicleData.name}</h3>
            <h4>Modelo</h4>
            <p>{vehicleData.model}</p>
            <h4>Fabricante</h4>
            <p>{vehicleData.manufacturer}</p>
            <h4>Valor</h4>
            <p>{vehicleData.cost_in_credits}</p>
            <h4>Velocidade Atmosférica Máxima</h4>
            <p>{vehicleData.max_atmosphering_speed}</p>
            <h4>Capacidade</h4>
            <p>{vehicleData.crew}</p>
          </div>
        )}
      </CardBox>
    </PageLayout>
  )
}