import { graphql } from "gatsby"
import React from "react"
import aboutStyles from "../components/about.module.scss"
import Contact from "../components/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import shian from "../images/shian.jpg"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div className={aboutStyles.aboutContent}>
        <img src={shian} alt="Shian" className={aboutStyles.profilePic} />
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <Contact />
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
