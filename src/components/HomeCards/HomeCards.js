import MainCards from "../MainCards/MainCards";
import cardsFitness from "../../data/cardsFitness";
import cardsSupplements from "../../data/cardsSupplements";
import cardsBodyCare from "../../data/cardsBodyCare";

function Home() {
  return (
    <>
      <MainCards
        title="Fitness Products"
        data={cardsFitness}
        buttonLink="/fitness"
      />

      <MainCards
        title="Supplements"
        data={cardsSupplements}
        buttonLink="/supplements"
      />

      <MainCards
        title="Body Care"
        data={cardsBodyCare}
        buttonLink="/bodycare"
      />
    </>
  );
}

export default Home;
