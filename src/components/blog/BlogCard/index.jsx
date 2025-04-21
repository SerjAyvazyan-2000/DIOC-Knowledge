import PropTypes from "prop-types";
import Chip from "../../Chip";
import { formatDate } from "../../../utils/helper";
import PinIcon from "../../../assets/images/IconPin.svg";
import "./styles.scss";

const BlogCard = ({ blog, variant = "horizontal", onClick }) => {
  return (
    <div className={`blog-card ${variant}`} onClick={onClick}>
      <div className="blog-card-image">
        <div className="image-placeholder" />
      </div>
      <div className="blog-card-content">
        <div className="categories-and-tags">
          <div className="categories">
            {blog?.category && (
              <Chip
                label={blog?.category?.name}
                backgroundColor="#444CE7"
                textColor="#FAFAFA"
                size="small"
              />
            )}
          </div>
          <div className="tags">
            {blog?.tags &&
              blog?.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag?.name}
                  backgroundColor="#2F2F2F"
                  textColor="#FAFAFA"
                  size="small"
                />
              ))}
          </div>
        </div>
        <div className="title-and-description">
          <span>{blog?.title}</span>
          <p>{blog?.content[0]?.children[0]?.text}</p>
        </div>
        <div className="date-container">
          <p className="date">
            {blog?.createdAt && formatDate(blog?.createdAt)}
          </p>
          {blog?.readTimeMinutes && (
            <p className="read-time">Читать ~ {blog?.readTimeMinutes} минут</p>
          )}
          <p className="read-time">ДИОК.Знания</p>
        </div>
      </div>
      {variant === "horizontal" && (
        <div className="pin-icon">
          <img src={PinIcon} alt="pin" />
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.array,
    readTimeMinutes: PropTypes.number,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    createdAt: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  variant: PropTypes.oneOf(["horizontal", "vertical"]),
  onClick: PropTypes.func,
};

export default BlogCard;
