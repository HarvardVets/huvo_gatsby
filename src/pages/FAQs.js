import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout.js'
import FAQ from '../components/faq.js'

class FAQPage extends React.Component {
  render() {
    const { data } = this.props
    const nodes = data.allMarkdownRemark.edges
    var faqs = {}
    nodes.forEach(({ node }) => {
      let { frontmatter } = node
      faqs[frontmatter.category]
        ? faqs[frontmatter.category].push(frontmatter)
        : (faqs[frontmatter.category] = [frontmatter])
    })
    return (
      <Layout>
        <FAQ faqs={faqs} />
      </Layout>
    )
  }
}

export default FAQPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(faqs)/.*.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            question
            answer
            category
          }
        }
      }
    }
  }
`
