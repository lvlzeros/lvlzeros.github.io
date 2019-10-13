import { Link } from "gatsby"
import React from "react"
import blogPostStyles from "./blog.module.scss"

const BlogPost = ({ title, excerpt, date, slug }) => {
  return (
    <div className={blogPostStyles.blogPost}>
      <Link to={`/blog/${slug}`}>
        <h1 className={blogPostStyles.title}>{title}</h1>
        <p className={blogPostStyles.date}>{date}</p>
        <p className={blogPostStyles.excerpt}>{excerpt}</p>
      </Link>
    </div>
  )
}

export default BlogPost
