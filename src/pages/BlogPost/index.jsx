import { useParams } from "react-router-dom";
import "./styles.scss";
import Breadcrumbs from "../../components/Breadcrumbs";
import StripeService from "../../services/stripeService";
import { useEffect, useMemo, useState } from "react";
import { formatDate } from "../../utils/helper";
import Chip from "../../components/Chip";
import iconMail from "../../assets/images/IconMail.svg";
import box from "../../assets/images/box.svg";
import subscribeDecor from "../../assets/images/subscribeDecor.png";
import subscribeDecorMobile from "../../assets/images/subscribeDecorMobile.png";
import { Link, useNavigate } from "react-router-dom";
import BlogCard from "../../components/blog/BlogCard";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Электронная почта");
  const [labelClass, setLabelClass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      const blogPost = await StripeService.getArticleById(id);
      setBlogPost(blogPost);
    };
    fetchBlogPost();
  }, [id]);

  const breadcrumbItems = [
    { label: "Главная", path: "/" },
    { label: "Блог", path: "/blog" },
    { label: blogPost?.title, path: `/blog/${id}` },
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!checked && email) {
      setMessage("Вы должны согласиться с политикой конфиденциальности");
      setLabelClass("error");
      return;
    }

    const savedEmail = localStorage.getItem("subscribedEmail");

    if (savedEmail === email) {
      setMessage("Вы уже подписаны");
      setLabelClass("active");
      setEmail("");
    } else if (!validateEmail(email)) {
      setMessage("Неверный формат почты");
      setLabelClass("error");
    } else {
      localStorage.setItem("subscribedEmail", email);
      setMessage("Вы подписаны");
      setLabelClass("active");
      setEmail("");
    }
  };

  const renderSimilarPosts = useMemo(() => {
    if (blogPost?.similarArticles?.length > 0) {
      return blogPost?.similarArticles?.map((post) => (
        <BlogCard
          key={post?.id}
          blog={post}
          onClick={() => navigate(`/blog/${post?.documentId}`)}
          variant="vertical"
        />
      ));
    }
  }, [blogPost?.similarArticles, navigate]);

  return (
    <div className="blog-post">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="blog-post-container">
        <div className="blog-post-header">
          <div className="blog-post-heading">
            <div className="blog-post-heading-tags">
              {blogPost?.category?.name && (
                <Chip
                  label={blogPost?.category?.name}
                  backgroundColor="#444CE7"
                  textColor="#FAFAFA"
                  size="small"
                />
              )}
              {blogPost?.tags?.map((tag) => (
                <Chip
                  key={tag}
                  label={tag?.name}
                  backgroundColor="#2F2F2F"
                  textColor="#FAFAFA"
                  size="small"
                />
              ))}
            </div>
            <div className="blog-post-heading-date">
              <p className="date">
                {blogPost?.createdAt && formatDate(blogPost?.createdAt)}
              </p>
              {blogPost?.readTimeMinutes && (
                <p className="read-time">
                  Читать ~ {blogPost?.readTimeMinutes} минут
                </p>
              )}
              <p className="read-time">ДИОК.Знания</p>
            </div>
          </div>
          <div className="blog-post-heading-title">
            <span>{blogPost?.title}</span>
          </div>
        </div>
        <div className="blog-post-image">
          <div className="image-placeholder" />
        </div>
        <div className="blog-post-content">
          <p>{blogPost?.content[0]?.children[0]?.text}</p>
        </div>
        <section className="subscribe-section ">
          <div className="container">
            <div className="subscribe-body G-align-start">
              <div className="subscribe-text-cnt">
                <h2 className="subscribe-text text-desktop">
                  <span className="desktop-bold-text">
                    Подпишись на почтовую рассылку и получай актуальные
                    материалы для развития бизнеса
                  </span>
                </h2>
              </div>

              <div className="subscribe-tools">
                <h3 className="subscribe-tools-title">{message}</h3>
                <label className={`subscribe-label ${labelClass}`}>
                  <input
                    className="subscribe-input"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@youcompany.com"
                  />

                  <div className="mobile-icon-email">
                    <img src={iconMail} alt="" />
                  </div>
                </label>
                <div
                  className={`subscribe-agree  agree-box G-align-center ${
                    checked ? "checked" : ""
                  }`}
                  onClick={() => setChecked(!checked)}
                >
                  <div className="agree-icon">
                    <img src={box} alt="" />
                  </div>
                  <div className="agree-text">
                    Вы согласны с{" "}
                    <Link to="/">политикой конфиденциальности</Link>
                  </div>
                </div>

                <div className="agree-btn G-justify-end">
                  <button onClick={handleSubmit} className="btn-primary">
                    Подписаться
                  </button>
                </div>
              </div>
              <div className="subscribe-decor">
                <img className="img-desktop" src={subscribeDecor} alt="" />
                <img className="img-mobile" src={subscribeDecorMobile} alt="" />
              </div>
            </div>
          </div>
        </section>
        {blogPost?.similarArticles?.length > 0 && (
          <div className="similar-posts">
            <h2>Похожие статьи</h2>
            <div className="similar-posts-list">{renderSimilarPosts}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
