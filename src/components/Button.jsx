import pt from "prop-types";
import clsx from "clsx";

function Button({ label, variant = "fill", className, onClick = () => {} }) {
  const classNames = clsx(
    "h-16",
    "px-3",
    "sm:h-14",
    "rounded-xl",
    variant === "fill"
      ? "text-white bg-primary"
      : "text-primary bg-transparent",
    "border",
    "border-primary",
    className,
  );

  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: pt.func,
  className: pt.string,
  label: pt.string.isRequired,
  variant: pt.oneOf("fill", "transparent"),
};

export default Button;
