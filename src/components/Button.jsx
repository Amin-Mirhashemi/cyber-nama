import pt from "prop-types";
import clsx from "clsx";

function Button({
  label,
  variant = "fill",
  className,
  onClick = () => {},
  loading,
  disabled,
}) {
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
    disabled ? "cursor-not-allowed" : "disabled:cursor-wait",
    className,
  );

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: pt.func,
  className: pt.string,
  disabled: pt.bool,
  loading: pt.bool,
  label: pt.string.isRequired,
  variant: pt.oneOf("fill", "transparent"),
};

export default Button;
