import React from 'react'
import { Link } from 'gatsby'

class BlogPage extends React.Component {
  render() {
    const posts = this.props.posts
    console.log(posts)
    return (
      <div>
        <p>blah</p>
      </div>
    )
    /*
    return (
      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
    )
  */
  }
}

export default BlogPage
