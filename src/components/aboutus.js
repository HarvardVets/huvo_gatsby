import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import style from '../styles/AboutUs.module.sass'
import Member from './AboutUs/member.js'

const About = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(members)/.*.md$/" } }
        ) {
          edges {
            node {
              frontmatter {
                name
                title
                picture
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div className={style.wrapper}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Member member={node.frontmatter} />
          ))}
        </div>
      </div>
    )}
  />
)

export default About
