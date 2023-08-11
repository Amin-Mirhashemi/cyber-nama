import pt from "prop-types";

function User({ color = "#F9F8FF" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M11 11C13.5313 11 15.5834 8.94795 15.5834 6.41665C15.5834 3.88534 13.5313 1.83331 11 1.83331C8.46872 1.83331 6.41669 3.88534 6.41669 6.41665C6.41669 8.94795 8.46872 11 11 11Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8742 20.1667C18.8742 16.6192 15.345 13.75 11 13.75C6.65502 13.75 3.12585 16.6192 3.12585 20.1667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

User.propTypes = {
  color: pt.string,
};

export default User;
