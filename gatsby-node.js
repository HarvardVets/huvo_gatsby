const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  // query for all markdown files in the subfolder, 'blog', by descending date
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(blog)/.*.md$/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {
          node,
        },
      })
    })
  })
}
