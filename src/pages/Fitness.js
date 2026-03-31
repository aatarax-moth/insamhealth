import React from "react";
import PageCards from "../components/PageCards/PageCards";
import cardsFitness from "../data/cardsFitness";

function FitnessPage() {
    return (
        <>
            <PageCards data={cardsFitness} title="Fitness" link="/Fitness" category="fitness"/>
        </>
    );
  }
  
  export default FitnessPage;