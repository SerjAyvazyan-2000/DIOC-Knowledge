import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs-container">
        <ul className="breadcrumbs-list">
          {items?.map((item, index) => (
            <li key={index} className="breadcrumbs-item">
              {index < items.length - 1 ? (
                <>
                  <Link to={item.path}>{item.label}</Link>
                  <span className="breadcrumbs-separator">{" > "}</span>
                </>
              ) : (
                <span className="breadcrumbs-current">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Breadcrumbs;
