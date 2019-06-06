import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

// Static assets
//##TODO: Fix css for this
import './ClientComponents/ClientNavbar/stylesheet.css'
import collegeShield from '../images/harvard-college.png'

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Navbar collapseOnSelect="true" expand="xl">
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav.Link className="navbar-logo" href="/">
          {
            <img
              alt="Harvard College Shield"
              src={collegeShield}
              className="navbar-image"
            />
          }
        </Nav.Link>
        <Nav className="mr-auto">
          {menuLinks.map((el, i) => (
            <Nav.Link className="navbar-link" href={el.link} key={i}>
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
