import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout.js'
import Blog from '../components/blog.js'

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout>
        <Blog posts={posts} />
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
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
`
