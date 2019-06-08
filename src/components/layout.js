/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer.js'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleAndMenuLinksQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond&amp;display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <main>{children}</main>
        <footer>
          <Footer menuLinks={data.site.siteMetadata.menuLinks} />
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
