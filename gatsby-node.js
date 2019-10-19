const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: path.basename(node.fileAbsolutePath, ".md"),
    })

    createNodeField({
      node,
      name: "templateKey",
      value: node.frontmatter.templateKey,
    })
  }
}

module.exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions

  // createRedirect({
  //   fromPath: `/`,
  //   toPath: `/blog/`,
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // })

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              templateKey
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create about page
  const aboutEdges = result.data.allMarkdownRemark.edges.filter(({ node }) => {
    return String(node.frontmatter.templateKey) === "about_page"
  })
  createPage({
    path: "/about",
    component: path.resolve("./src/templates/about_page.js"),
    context: {
      slug: aboutEdges[0].node.fields.slug,
      templateKey: aboutEdges[0].node.fields.templateKey,
    }, // additional data can be passed via context
  })

  // Create blog list pages
  const posts = result.data.allMarkdownRemark.edges.filter(({ node }) => {
    return String(node.frontmatter.templateKey) === "blog_template"
  })
  const postsPerPage = 3
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pg${i + 1}`,
      component: path.resolve("./src/templates/blog_list_template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        templateKey: "blog_template",
      },
    })
  })

  // Create blog post
  posts.forEach(({ node }) => {
    createPage({
      path: `/${node.fields.slug}`,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        slug: node.fields.slug,
        templateKey: node.frontmatter.templateKey,
      }, // additional data can be passed via context
    })
  })
}
