import MainCards from "../MainCards/MainCards";
import cardsFitness from "../../data/cardsFitness";
import cardsSupplements from "../../data/cardsSupplements";
import cardsBodyCare from "../../data/cardsBodyCare";
import Hero from "../Hero/Hero";

function Home() {
  return (
    <>
      <Hero/>
      <MainCards
        title="Fitness Products"
        data={cardsFitness}
        category="Fitness"
        buttonLink="/fitness"
      />

      <MainCards
        title="Supplements"
        data={cardsSupplements}
        category="Supplements"
        buttonLink="/supplements"
      />

      <MainCards
        title="Body Care"
        data={cardsBodyCare}
        category="BodyCare"
        buttonLink="/bodycare"
      />
    </>
  );
}

export default Home;
