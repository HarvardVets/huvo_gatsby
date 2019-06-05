import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
//##TODO: Fix css for this
import './ClientComponents/ClientNavbar/stylesheet.css'

const Header = ({ siteTitle }) => (
  <header>
    <Navbar collapseOnSelect="true" expand="xl">
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav.Link class="navbar-logo" href="/">
          {
            <img
              alt="Harvard College Shield"
              src={require('../../../images/harvard-college.png')}
              className="navbar-image"
            />
          }
        </Nav.Link>
        <Nav className="mr-auto">
          {menuLinks.map(el => (
            <Nav.Link className="navbar-link" href={el.link}>
              {el.name}
            </Nav.Link>
          ))}
        </Nav>
        <Navbar.Brand href="/" className="justify-content-end">
          Harvard Undergraduate Veterans Organization
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
