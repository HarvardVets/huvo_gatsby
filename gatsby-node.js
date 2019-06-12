const path = require('path')

// stolen from Gatsby docs. Add the file slug to its node.fields for each file we create
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogtemplate.js`)

  // query for all markdown files in the subfolder, 'blog', by descending date
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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
