import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { BlogFooter, BlogCard } from "../elements/BlogElements"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
       {/* Fick ej denna att fungera */}
      <article className="blog">
        {/* if image is not supplied, instead of breaking, dont show any image */}
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <BlogCard>
          {/* if title is not supplied, set a defualt title */}
          <h4>{title || "Artiklar"}</h4>
          <p>{desc}</p>
          <BlogFooter>
            <p>{category}</p>
            <p>{date}</p>
            </BlogFooter>
            </BlogCard>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Blog