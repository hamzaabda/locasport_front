import * as React from "react";

function BasketballIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={43}
      height={43}
      viewBox="0 0 64 64"
      {...props}
    >
      <circle cx="32" cy="32" r="30" fill="#f57c00" stroke="#000" strokeWidth="2" />
      <path
        d="M2 32h60M32 2v60M10 10c12 12 32 12 44 0M10 54c12-12 32-12 44 0"
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default BasketballIcon;
