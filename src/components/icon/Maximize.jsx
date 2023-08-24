import pt from "prop-types";

function Maximize({ color = "#F9F8FF" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M2.66675 12.0001V8.66675C2.66675 5.34675 5.34675 2.66675 8.66675 2.66675H12.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 2.66675H23.3333C26.6533 2.66675 29.3333 5.34675 29.3333 8.66675V12.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3333 21.3333V23.3333C29.3333 26.6533 26.6533 29.3333 23.3333 29.3333H21.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 29.3333H8.66675C5.34675 29.3333 2.66675 26.6533 2.66675 23.3333V20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Maximize.propTypes = {
  color: pt.string,
};

export default Maximize;
