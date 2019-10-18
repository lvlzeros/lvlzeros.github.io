import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import blogStyles from "../components/blog.module.scss"

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post-container">
        <div className={blogStyles.blogContent}>
          <h1 className={blogStyles.title}>{frontmatter.title}</h1>
          <p className={blogStyles.date}>{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        title
      }
    }
  }
`
