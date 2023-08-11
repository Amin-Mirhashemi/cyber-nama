import pt from "prop-types";

function User({ color = "#F9F8FF" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="38"
      viewBox="0 0 39 38"
      fill="none"
    >
      <path
        d="M19.6899 20.2352C19.579 20.2193 19.4365 20.2193 19.3099 20.2352C16.5232 20.1402 14.3065 17.8602 14.3065 15.0577C14.3065 12.1918 16.6182 9.86432 19.4999 9.86432C22.3657 9.86432 24.6932 12.1918 24.6932 15.0577C24.6774 17.8602 22.4765 20.1402 19.6899 20.2352Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.1715 30.6849C27.3531 33.2657 23.6165 34.8332 19.4998 34.8332C15.3831 34.8332 11.6465 33.2657 8.82812 30.6849C8.98646 29.1966 9.93646 27.7399 11.6306 26.5999C15.969 23.7182 23.0623 23.7182 27.369 26.5999C29.0631 27.7399 30.0131 29.1966 30.1715 30.6849Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5001 34.8334C28.2446 34.8334 35.3334 27.7445 35.3334 19C35.3334 10.2555 28.2446 3.16669 19.5001 3.16669C10.7556 3.16669 3.66675 10.2555 3.66675 19C3.66675 27.7445 10.7556 34.8334 19.5001 34.8334Z"
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
