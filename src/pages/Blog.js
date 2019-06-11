import React from 'react'
import { Link, graphql } from 'gatsby'

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
