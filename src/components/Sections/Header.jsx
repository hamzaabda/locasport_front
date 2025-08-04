import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Components
import FullButton from "../Buttons/FullButton";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

// Assets
import FootballImg from "../../assets/img/football.jpg";
import BasketImg from "../../assets/img/basket.jpg";
import TennisImg from "../../assets/img/tennis.jpg";

export default function Header() {
  const images = [FootballImg, BasketImg, TennisImg];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    fade: true
  };

  const [showQuote, setShowQuote] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowQuote((prev) => !prev);
    }, 10000); // chaque 10 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Louez vos terrains avec LocaSport</h1>
          <HeaderP className="font13 semiBold">
            Réservez facilement des terrains de football, basketball ou tennis dans votre région. LocaSport connecte les sportifs et les espaces adaptés pour des moments inoubliables entre amis ou en club.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Réserver un terrain" />
          </BtnWrapper>
        </div>
      </LeftSide>

      <RightSide>
        <ImageWrapper>
          <SliderWrapper>
            <Slider {...settings}>
              {images.map((imgSrc, index) => (
                <div key={index}>
                  <Img src={imgSrc} alt={`sport-${index}`} />
                </div>
              ))}
            </Slider>
          </SliderWrapper>

          {showQuote && (
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>« Le sport va chercher la peur pour la dominer, la fatigue pour en triompher, la difficulté pour la vaincre. »</em>
                </p>
                <p className="font13 orangeColor textRight" style={{ marginTop: '10px' }}>
                  Pierre de Coubertin
                </p>
              </div>
            </QuoteWrapper>
          )}

          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg" />
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 900px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  height: 420px;
  border-radius: 16px;
  overflow: hidden;

  .slick-dots li button:before {
    color: #f40051;
  }

  .slick-dots {
    bottom: -30px;
  }

  @media (max-width: 960px) {
    max-width: 90%;
    height: 360px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 16px;

  @media (max-width: 960px) {
    height: 360px;
  }

  @media (max-width: 560px) {
    height: 280px;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
