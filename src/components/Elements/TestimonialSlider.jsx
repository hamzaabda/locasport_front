import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Liste des témoignages sans noms, uniquement avis et date relative
  const testimonials = [
    {
      text: "J’ai facilement réservé un terrain de football grâce à Locasport, service très pratique !",
      date: "il y a 2 jours",
    },
    {
      text: "Les terrains de tennis sont bien entretenus et la réservation est rapide.",
      date: "il y a 1 semaine",
    },
    {
      text: "Application simple d’utilisation, parfait pour organiser mes matchs de basketball.",
      date: "il y a 3 jours",
    },
    {
      text: "Les tarifs sont raisonnables et la disponibilité des terrains est très bonne.",
      date: "il y a 5 jours",
    },
    {
      text: "Service client réactif et plateforme intuitive, je recommande Locasport.",
      date: "il y a 1 mois",
    },
    {
      text: "Locasport facilite vraiment la vie des adhérents pour louer leurs terrains préférés.",
      date: "il y a 2 semaines",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <LogoWrapper key={index} className="flexCenter">
            <TestimonialBox
              text={item.text}
              author={item.date} // On affiche ici juste la date relative, pas de nom
            />
          </LogoWrapper>
        ))}
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
