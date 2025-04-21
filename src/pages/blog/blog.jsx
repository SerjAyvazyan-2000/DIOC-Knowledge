import { useEffect, useMemo, useState, useCallback } from "react";
import StripeService from "../../services/stripeService";
import BlogCard from "../../components/blog/BlogCard";
import DemoCard from "../../components/blog/DemoCard";
import "./blog.scss";
import Breadcrumbs from "../../components/Breadcrumbs/index";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await StripeService.getArticleCategories();
        setBlogPosts(response);
      } catch (err) {
        console.log(err, "Error fetching blog posts");
      }
    };

    fetchBlogPosts();
  }, []);

  const breadcrumbItems = [
    { label: "Главная", path: "/" },
    { label: "Блог", path: "/blog" },
  ];

  const handleClickBlogCard = useCallback(
    (id) => {
      navigate(`/blog/${id}`);
    },
    [navigate]
  );

  const renderBlogPostsWithDemo = useMemo(() => {
    if (blogPosts.length <= 1) return null;

    const remainingPosts = blogPosts.slice(1);
    const totalPosts = remainingPosts.length;

    const postsBeforeDemo = Math.floor(totalPosts / 2);

    const postsBefore = remainingPosts.slice(0, postsBeforeDemo);
    const postsAfter = remainingPosts.slice(postsBeforeDemo);

    return (
      <>
        {postsBefore.map((post) => (
          <BlogCard
            key={post.id}
            blog={post}
            variant="vertical"
            onClick={() => {
              handleClickBlogCard(post.documentId);
            }}
          />
        ))}
        <DemoCard onClick={() => {}} />

        {postsAfter.map((post) => (
          <BlogCard
            key={post.id}
            blog={post}
            variant={postsAfter.length === 1 ? "horizontal" : "vertical"}
            onClick={() => {
              handleClickBlogCard(post.documentId);
            }}
          />
        ))}
      </>
    );
  }, [blogPosts, handleClickBlogCard]);

  return (
    <div className="blog-page">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="blog-container">
        {blogPosts.length > 0 && (
          <BlogCard
            blog={blogPosts[0]}
            variant="horizontal"
            onClick={() => {
              handleClickBlogCard(blogPosts[0].documentId);
            }}
          />
        )}
        <div className="blog-container-bottom">{renderBlogPostsWithDemo}</div>
      </div>
    </div>
  );
};

export default Blog;
