import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={39.581}
      height={39.581}
      viewBox="0 0 64 64"
      {...props}
    >
      <circle cx="32" cy="32" r="30" fill="#7ed957" />
      <path
        d="M13 14c6 6 6 30 0 36"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M51 14c-6 6-6 30 0 36"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

export default SvgComponent;
