import React from 'react'
import { Link } from 'gatsby'
import style from '../styles/Footer.module.sass'
//##TODO: add keys to the footer bars
import { zip } from '../helpers.js'

export default class Footer extends React.Component {
  render() {
    let links
    links = this.props.menuLinks.map((el, i) => (
      <Link to={el.link} key={i}>
        <p className={style.footerTags}>{el.name}</p>
      </Link>
    ))
    let sameLengthBars = Array(links.length).fill(
      <p className={style.footerTagBar}>|</p>
    )
    let resultant_jsx = zip([links, sameLengthBars])
    resultant_jsx.splice(-1, 1)
    // resultant jsx is now an array of [Link, Bar, Link, Bar, Link]
    // where each Link has been dynamically drawn from the same menuLinks prop as the header
    return (
      <div className={style.footer}>
        <div className={style.footerTagsWrapper}>{resultant_jsx}</div>
        <div className="footer-social-wrapper">
          <img src={require('../images/fb.png')} alt={'facebook'} />
          <img src={require('../images/insta.png')} alt={'instagram'} />
        </div>
        <div className={style.copyright}>
          © {new Date().getFullYear()},Harvard Undergraduate Veterans
          Organization. Harvard name and/or Harvard College shield are
          trademarks of the President and Fellows of Harvard College and are
          used by permission of Harvard University.
        </div>
      </div>
    )
  }
}

/*
<div className={style.footerTagsWrapper}>
      <Link to="/">
        <p className={style.footerTags}>The Mission</p>
      </Link>

      <p className={style.footerTagBar}>|</p>

      <Link to="/aboutus">
        <p className="footer-tags">About the Team</p>
      </Link>
      <p className={style.footerTagBar}>|</p>
      <Link to="events">
        <p className="footer-tags">Events</p>
      </Link>
      <p className={style.footerTagBar}>|</p>
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
*/
