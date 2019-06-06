import React from 'react'

export default function Template({
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html } = pageContext.node
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
