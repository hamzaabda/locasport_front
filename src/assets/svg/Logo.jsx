import React from "react";
import { FaFootballBall } from "react-icons/fa"; // football
import { GiBasketballBasket } from "react-icons/gi"; // basketball
import { GiTennisRacket } from "react-icons/gi"; // tennis

function SvgComponent({ type, size = 48, color = "#000" }) {
  switch (type) {
    case "football":
      return <FaFootballBall size={size} color={color} />;
    case "basketball":
      return <GiBasketballBasket size={size} color={color} />;
    case "tennis":
      return <GiTennisRacket size={size} color={color} />;
    default:
      return null;
  }
}

function LocaSportLogoRotating() {
  const types = ["football", "basketball", "tennis"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % types.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-3">
      <SvgComponent type={types[index]} size={48} color="#F40051" />
    
    </div>
  );
}

export default LocaSportLogoRotating;
