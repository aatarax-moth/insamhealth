import React from "react";
import PageCards from "../components/PageCards/PageCards";
import cardsSupplements from "../data/cardsSupplements";

function SupplementsPage() {
    return (
        <>
            <PageCards data={cardsSupplements} title="Supplements" link="/Supplements"/>
        </>
    );
  }
  
  export default SupplementsPage;