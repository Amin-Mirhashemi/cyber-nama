import pt from "prop-types";

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium overflow-hidden">
        {label}
      </label>
      <input
        className="w-full px-4 py-2 mt-2 bg-black border rounded-lg focus:outline-none focus:border-primary"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  label: pt.string,
  placeholder: pt.string,
  value: pt.string,
  onChange: pt.func,
  type: pt.string,
  className: pt.string,
};

export default Input;
