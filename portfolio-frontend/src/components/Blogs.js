import React from "react";
import Title from "./Title";
import Blog from "./Blog";
import { Link } from "gatsby";
import { BlogsWrapper, BlogsArticles} from "../elements/BlogsElements"

export const Blogs = ({ blogs, title, showLink }) => {
  return <BlogsWrapper>
    <Title title={title} />
    <BlogsArticles>
      {blogs.map((blog) => {
        return <Blog key={blog.id} {...blog} />
      })}
      </BlogsArticles>
    {/* If the showLink is undefined, dont show any link, otherwise show link */}
    {showLink && (
      <Link to="/blog" className="btn center-btn">
        Alla artiklar
      </Link>
    )}
    </BlogsWrapper>
};
export default Blogs;
