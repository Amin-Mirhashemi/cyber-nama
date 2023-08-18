import pt from "prop-types";

function Menu({ color = "#F9F8FF" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.51953 7.10999H21.4795"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.51953 2.10999V6.96999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4805 2.10999V6.51999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 14.45V13.25C9.75 11.71 10.84 11.08 12.17 11.85L13.21 12.45L14.25 13.05C15.58 13.82 15.58 15.08 14.25 15.85L13.21 16.45L12.17 17.05C10.84 17.82 9.75 17.19 9.75 15.65V14.45V14.45Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Menu.propTypes = {
  color: pt.string,
};

export default Menu;
