import { graphql } from "gatsby"
import React from "react"
import blogStyles from "../components/blog.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className={blogStyles.blogContent}>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
