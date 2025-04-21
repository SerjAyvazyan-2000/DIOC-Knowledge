import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Select = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  options = [],
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option) => {
    onChange?.({
      target: {
        name,
        value: option.value,
      },
    });
    setIsOpen(false);
  };

  return (
    <div
      className={`select-wrapper ${disabled ? "disabled" : ""} ${
        error ? "error" : ""
      }`}
      ref={selectRef}
    >
      <div
        className={`select-header ${isOpen ? "open" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={!selectedOption ? "placeholder" : ""}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`arrow-icon ${isOpen ? "open" : ""}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M1 2L6 6L11 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="select-dropdown">
          {options.map((option) => (
            <div
              key={option.id}
              className={`select-option ${
                option.value === value ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {error && <div className="select-error">{error}</div>}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  disabled: PropTypes.bool,
};

export default Select;
