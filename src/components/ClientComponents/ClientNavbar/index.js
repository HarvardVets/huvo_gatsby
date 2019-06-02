import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './stylesheet.css';

export default function ClientNavbar(props){

	return(
		<Navbar collapseOnSelect='true' expand='xl'>

			<Navbar.Toggle />

			<Navbar.Collapse>
          <Nav.Link class="navbar-logo" href="/">
          {<img src={require('../../../images/harvard-college.png')} className='navbar-image' />}
          </Nav.Link>
				<Nav className="mr-auto">
				  <Nav.Link className='navbar-link' href='#aboutus'>About the Team</Nav.Link>
				  <Nav.Link className='navbar-link' href='#events'>Events</Nav.Link>
				  <Nav.Link className='navbar-link' href='#reachout'>Reach Out</Nav.Link>
				  <Nav.Link className='navbar-link' href='#faqs'>FAQs</Nav.Link>
				  <Nav.Link className='navbar-link' href='#gallery'>Gallery</Nav.Link>
          <Nav.Link className='navbar-link' href='#blog'>Blog</Nav.Link>
        </Nav>
          <Navbar.Brand href='/' className="justify-content-end">
            Harvard Undergraduate Veterans Organization
          </Navbar.Brand>
			</Navbar.Collapse>

		</Navbar>
	)
}
