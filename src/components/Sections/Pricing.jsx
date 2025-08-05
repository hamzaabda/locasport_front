import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nos Tarifs de Location</h1>
            <p className="font13">
              Louez facilement des terrains de football, basketball ou tennis à travers toute la Tunisie.
              <br />
              Choisissez votre sport et la durée, profitez de nos terrains de qualité.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="football"
                price="50 TND / heure"
                title="Terrain Football"
                text="Location de terrain de football standard pour vos matchs et entraînements."
                offers={[
                  { name: "Terrain extérieur", cheked: true },
                  { name: "Éclairage nocturne", cheked: true },
                  { name: "Vestiaires disponibles", cheked: true },
                  { name: "Parking gratuit", cheked: false },
                  { name: "Douche", cheked: false },
                ]}
                // Plus d'action => pas de bouton Buy
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="basketball"
                price="40 TND / heure"
                title="Terrain Basketball"
                text="Location de terrain de basketball en salle ou en extérieur."
                offers={[
                  { name: "Sol en bois", cheked: true },
                  { name: "Filets et paniers", cheked: true },
                  { name: "Éclairage adapté", cheked: true },
                  { name: "Vestiaires disponibles", cheked: false },
                  { name: "Parking gratuit", cheked: false },
                ]}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="tennis"
                price="30 TND / heure"
                title="Terrain Tennis"
                text="Location de terrain de tennis pour jouer en simple ou double."
                offers={[
                  { name: "Surface en dur", cheked: true },
                  { name: "Filet officiel", cheked: true },
                  { name: "Éclairage", cheked: false },
                  { name: "Vestiaires", cheked: false },
                  { name: "Parking", cheked: false },
                ]}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;
