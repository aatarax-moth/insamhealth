import React from "react";
import PageCards from "../components/PageCards/PageCards";
import cardsBodyCare from "../data/cardsBodyCare";

function BodyCarePage() {
    return (
        <>
            <PageCards data={cardsBodyCare} title="Body Care"/>
        </>
    );
  }
  
  export default BodyCarePage;