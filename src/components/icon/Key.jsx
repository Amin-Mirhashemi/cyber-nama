import pt from "prop-types";

function Key({ color = "#F9F8FF" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4912 12.4417C14.7746 14.15 12.3162 14.675 10.1579 14L6.23289 17.9167C5.94955 18.2083 5.39122 18.3833 4.99122 18.325L3.17455 18.075C2.57455 17.9917 2.01622 17.425 1.92455 16.825L1.67455 15.0083C1.61622 14.6083 1.80789 14.05 2.08289 13.7667L5.99955 9.85C5.33289 7.68333 5.84955 5.225 7.56622 3.51666C10.0246 1.05833 14.0162 1.05833 16.4829 3.51666C18.9496 5.975 18.9496 9.98333 16.4912 12.4417Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.74121 14.575L7.65788 16.4917"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.083 9.16669C12.7734 9.16669 13.333 8.60704 13.333 7.91669C13.333 7.22633 12.7734 6.66669 12.083 6.66669C11.3927 6.66669 10.833 7.22633 10.833 7.91669C10.833 8.60704 11.3927 9.16669 12.083 9.16669Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Key.propTypes = {
  color: pt.string,
};

export default Key;
