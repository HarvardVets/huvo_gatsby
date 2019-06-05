import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './stylesheet.css'

export default function ClientNavbar(props) {
  return (
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
          <Nav.Link className="navbar-link" href="/AboutUs">
            About the Team
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/Events">
            Events
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/ReachOut">
            Reach Out
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/FAQs">
            FAQs
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/Gallery">
            Gallery
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/Blog">
            Blog
          </Nav.Link>
        </Nav>
        <Navbar.Brand href="/" className="justify-content-end">
          Harvard Undergraduate Veterans Organization
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  )
}
