import React from 'react'
import { Link } from 'gatsby'
import './stylesheet.css'

const Footer = props => (
  <div className="footer">
    <div className="footer-harvard-tags-wrapper">
      <Link to="/">
        <p className="footer-harvard-tags">Harvard Admissions</p>
      </Link>
      <p className="footer-tag-bar">|</p>
    </div>
    <div className="footer-tags-wrapper">
      <Link to="/">
        <p className="footer-tags">The Mission</p>
      </Link>
      <p className="footer-tag-bar">|</p>
      <Link to="/aboutus">
        <p className="footer-tags">About the Team</p>
      </Link>
      <p className="footer-tag-bar">|</p>
      <Link to="events">
        <p className="footer-tags">Events</p>
      </Link>
      <p className="footer-tag-bar">|</p>
      <Link to="reachout">
        <p className="footer-tags">Reach Out</p>
      </Link>
      <p className="footer-tag-bar">|</p>
      <Link to="faqs">
        <p className="footer-tags">FAQs</p>
      </Link>
      <p className="footer-tag-bar">|</p>
      <Link to="gallery">
        <p className="footer-tags">Gallery</p>
      </Link>
    </div>
    <div className="footer-social-wrapper">
      <img src={require('../../../images/fb.png')} alt={'facebook'} />
      <img src={require('../../../images/insta.png')} alt={'instagram'} />
    </div>
    © {new Date().getFullYear()}, Built with
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
)

export default Footer
