import { graphql } from "gatsby"
import React, { Component } from "react"
import BlogPost from "../components/blog_post"
import BottomPagination from "../components/bottom_pagination"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogList extends Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO title="Blog" />
        <ul
          style={{
            "list-style-type": "none",
            margin: 0,
          }}
        >
          {posts.map(({ node }) => {
            return (
              <li>
                <BlogPost
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  slug={node.fields.slug}
                  excerpt={node.excerpt}
                />
              </li>
            )
          })}
        </ul>
        <BottomPagination
          maxPageNum={numPages}
          currentPageNum={currentPage}
          address={"/"}
        />
      </Layout>
    )
  }
}

export default BlogList

export const blogListQuery = graphql`
  query($skip: Int!, $limit: Int!, $templateKey: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
      filter: { fields: { templateKey: { eq: $templateKey } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
