import * as React from "react";

function ReservationIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39}
      height={39}
      fill="#7620ff"
      viewBox="0 0 24 24"
      aria-label="Icône Réservation"
      role="img"
      {...props}
    >
      <title>Réservation</title>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 
               1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5 
               20V9h14v11H5z" />
    </svg>
  );
}

export default ReservationIcon;
