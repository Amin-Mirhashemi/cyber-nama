import pt from "prop-types";

function Send({ color = "#E1DFE2" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.49 19.77L5.92998 15.49C2.08998 13.57 2.08998 10.43 5.92998 8.50999L14.49 4.22999C20.25 1.34999 22.6 3.70999 19.72 9.45999L18.85 11.19C18.63 11.63 18.63 12.36 18.85 12.8L19.72 14.54C22.6 20.29 20.24 22.65 14.49 19.77Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5601 12L13.1601 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Send.propTypes = {
  color: pt.string,
};

export default Send;
