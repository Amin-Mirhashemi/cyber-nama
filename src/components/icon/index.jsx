import clsx from "clsx";
import pt from "prop-types";

function Icon({ children, onClick = () => {}, className }) {
  const classNames = clsx(className, "cursor-pointer");

  return (
    <span className={classNames} onClick={onClick}>
      {children}
    </span>
  );
}

Icon.propTypes = {
  onClick: pt.func,
  className: pt.string,
  children: pt.element.isRequired,
};

export default Icon;
