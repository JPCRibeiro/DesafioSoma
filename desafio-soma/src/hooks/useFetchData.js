import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Erro ao carregar os filmes:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }

    fetchFilms();
  }, [url]);

  return { data, isLoading };
}