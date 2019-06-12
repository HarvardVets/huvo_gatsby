import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

// Static assets
import style from './../styles/navbar.module.sass'
import collegeShield from '../images/harvard-college.png'

const Header = ({ siteTitle, menuLinks }) => (
  <Navbar className={style.navbarWrapper} collapseOnSelect="true" expand="xl">
    <Navbar.Toggle />
    <Navbar.Collapse className={style.navbarInnerWrapper}>
      <Nav.Link className="navbar-logo" href="/">
        {
          <img
            alt="Harvard College Shield"
            src={collegeShield}
            className={`navbar-image ${style.shield}`}
          />
        }
      </Nav.Link>
      <Nav className={`mr-auto ${style.navbarNav}`}>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
