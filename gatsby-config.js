module.exports = {
  siteMetadata: {
    title: `Shian Poon`,
    description: ``,
    author: `@lvlzeros`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/pages/blog/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-page`,
        path: `${__dirname}/src/pages/about`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: { showLineNumbers: true },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
