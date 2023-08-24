import pt from "prop-types";

function Like({ color = "#F9F8FF" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16.8267 27.7466C16.3734 27.9066 15.6267 27.9066 15.1734 27.7466C11.3067 26.4266 2.66675 20.92 2.66675 11.5866C2.66675 7.46663 5.98675 4.1333 10.0801 4.1333C12.5067 4.1333 14.6534 5.30663 16.0001 7.11997C17.3467 5.30663 19.5067 4.1333 21.9201 4.1333C26.0134 4.1333 29.3334 7.46663 29.3334 11.5866C29.3334 20.92 20.6934 26.4266 16.8267 27.7466Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Like.propTypes = {
  color: pt.string,
};

export default Like;
