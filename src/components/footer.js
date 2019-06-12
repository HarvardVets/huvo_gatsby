import React from 'react'
import { Link } from 'gatsby'

// CSS
import style from './../styles/footer.module.sass'

import { zip } from './../utils/helpers.js'

export default class Footer extends React.Component {
  render() {
    let links
    let n = this.props.menuLinks.length * 2
    links = this.props.menuLinks.map((el, i) => (
      <Link to={el.link} key={i}>
        <p className={style.footerTags} key={i}>
          {el.name}
        </p>
      </Link>
    ))
    let sameLengthBars = Array(links.length)
      .fill(0)
      .map((_, i) => (
        <p className={style.footerTagBar} key={n - i}>
          |
        </p>
      ))
    let resultant_jsx = zip([links, sameLengthBars])
    resultant_jsx.splice(-1, 1)
    // resultant jsx is now an array of [Link, Bar, Link, Bar, Link]
    // where each Link has been dynamically drawn from the same menuLinks prop as the header
    return (
      <div className={style.footer}>
        <div className={style.footerTagsWrapper}>{resultant_jsx}</div>
        <div className={style.footerSocialWrapper}>
          <div>
            <img src={require('../images/fb.png')} alt={'facebook'} />
            <img src={require('../images/insta.png')} alt={'instagram'} />
          </div>
        </div>
        <p className={style.copyright}>
          © {new Date().getFullYear()}, Harvard Undergraduate Veterans
          Organization. Harvard name and/or Harvard College shield are
          trademarks of the President and Fellows of Harvard College and are
          used by permission of Harvard University.
        </p>
      </div>
    )
  }
}
