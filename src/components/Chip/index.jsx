import PropTypes from "prop-types";
import "./styles.scss";

const Chip = ({ label, backgroundColor, textColor, size = "medium" }) => {
  const chipStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: "1px solid #444CE7",
  };

  return (
    <div className={`chip ${size}`} style={chipStyle}>
      {label}
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Chip.defaultProps = {
  backgroundColor: "#E0E0E0",
  textColor: "#000000",
  size: "medium",
};

export default Chip;
