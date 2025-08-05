import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Les Actualités Locasport</h1>
            <p className="font13">
              Retrouvez les dernières nouveautés et conseils pour louer vos terrains de football, basketball ou tennis en toute simplicité.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nouveaux terrains disponibles"
                text="Nous venons d’ajouter plusieurs terrains de football et tennis disponibles à la location dans notre application."
                tag="Location"
                author="Locasport Team, il y a 3 jours"
                action={() => alert("Plus d'infos sur Nouveaux terrains")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Conseils pour bien réserver"
                text="Découvrez comment choisir le meilleur créneau horaire et éviter les conflits lors de vos réservations."
                tag="Conseils"
                author="Locasport Team, il y a 5 jours"
                action={() => alert("Plus d'infos sur Conseils réservation")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Partenariats locaux"
                text="Locasport collabore avec plusieurs clubs pour vous offrir des tarifs préférentiels."
                tag="Partenariat"
                author="Locasport Team, il y a 7 jours"
                action={() => alert("Plus d'infos sur Partenariats")}
              />
            </div>
          </div>
          
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ils parlent de Locasport</h1>
            <p className="font13">
              Voici quelques avis de nos adhérents qui utilisent régulièrement notre plateforme pour louer des terrains.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
