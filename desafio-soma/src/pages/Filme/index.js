import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../../components/ApiPageLayout";
import GenerateCardButton from "../../components/GenerateCardButton";
import { CardBox } from "../../components/ApiPageLayout/ApiPageLayout.styled";

export default function FilmePage() {
  const { data: films, isLoading } = useFetchData("https://swapi.dev/api/films/");
  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    document.title = "Filmes - Desafio Soma"
  }, [])

  return (
    <PageLayout title="Filmes" subtitle="Clique no botão para ver as informações de um filme aleatório do Star Wars!" icon={faFilm} isLoading={isLoading}>
      <CardBox>
        <GenerateCardButton category={films} setCategoryData={setFilmData}/>
        {filmData && (
          <div>
            <h3>{filmData.title}</h3>
            <h4>Resumo da Abertura</h4>
            <p>{filmData.opening_crawl}</p>
            <h4>Data de Lançamento</h4>
            <p>{filmData.release_date}</p>
            <h4>Diretor</h4>
            <p>{filmData.director}</p>
            <h4>Produtor</h4>
            <p>{filmData.producer}</p>
          </div>
        )}
      </CardBox>
    </PageLayout>
  );
}