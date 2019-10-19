import { Link } from "gatsby"
import React from "react"
import blogPostStyles from "./blog.module.scss"

const BlogPost = ({ title, excerpt, date, slug }) => {
  return (
    <div className={blogPostStyles.blogContent}>
      <div className={blogPostStyles.divider}>
        <Link to={`/${slug}`}>
          <h1 className={blogPostStyles.title}>{title}</h1>
          <p className={blogPostStyles.date}>{date}</p>
          <p className={blogPostStyles.excerpt}>{excerpt}</p>
        </Link>
      </div>
    </div>
  )
}

export default BlogPost
