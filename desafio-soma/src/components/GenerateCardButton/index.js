import { useState } from "react";
import { Button } from "./GenerateCardButton";

export default function GenerateCardButton({ category, setCategoryData }) {
  const [lastIndex, setLastIndex] = useState(null);

  const handleCard = async () => {
    if (category.length > 0) {
      let randomIndex;
  
      do {
        randomIndex = Math.floor(Math.random() * category.length);
      } while (randomIndex === lastIndex);

      setLastIndex(randomIndex);
      setCategoryData(category[randomIndex]);
    }
  };

  return (
    <Button onClick={handleCard}>Tente a sorte!</Button>
  );
}
