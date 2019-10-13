import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BlogPost from "../../components/blogPost"
import Layout from "../../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
  `)

  return (
    <Layout>
      <ul
        style={{
          "list-style-type": "none",
          margin: 0,
        }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => {
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
    </Layout>
  )
}

export default BlogPage
