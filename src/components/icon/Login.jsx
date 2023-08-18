import pt from "prop-types";

function Login({ color = "#F9F8FF" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.90039 7.55999C9.21039 3.95999 11.0604 2.48999 15.1104 2.48999H15.2404C19.7104 2.48999 21.5004 4.27999 21.5004 8.74999V15.27C21.5004 19.74 19.7104 21.53 15.2404 21.53H15.1104C11.0904 21.53 9.24039 20.08 8.91039 16.54"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H14.88"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6504 8.65002L16.0004 12L12.6504 15.35"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Login.propTypes = {
  color: pt.string,
};

export default Login;
