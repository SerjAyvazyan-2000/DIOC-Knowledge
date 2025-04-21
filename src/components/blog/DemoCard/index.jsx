import PropTypes from "prop-types";
import "./styles.scss";

const DemoCard = ({ onClick }) => {
  return (
    <div className="demo-card">
      <div className="demo-card-header">
        <span>ДИОК.Знания - это просто</span>
        <p>Создай свой капитал знаний</p>
      </div>
      <div className="demo-card-button">
        <button onClick={onClick} className="bnt-register btn-primary">
          Запросить демо
        </button>
      </div>
    </div>
  );
};

DemoCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DemoCard;
