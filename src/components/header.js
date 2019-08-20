import PropTypes from 'prop-types'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

// Static assets
import style from './../styles/navbar.module.sass'
import collegeShield from '../images/harvard-college.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    let menus = props.menuLinks.map((el, i) => (
      <Nav.Link className="navbar-link" href={el.link} key={i}>
        {el.name}
      </Nav.Link>
    ))
    this.state = { menus }
  }

  render() {
    return (
      <Navbar
        sticky="top"
        className={style.navbarWrapper}
        collapseOnSelect="true"
        expand="lg"
      >
        <Navbar.Brand className="navbar-logo" href="/">
          {
            <img
              alt="Harvard College Shield"
              src={collegeShield}
              className={`navbar-image ${style.shield}`}
            />
          }
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={style.navbarInnerWrapper}
        >
          <Nav className={`mr-auto ${style.navbarNav}`}>{this.state.menus}</Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className="justify-content-end">
          Harvard Undergraduate Veterans Organization
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="bsic-navbar-nav" align="left" />
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
