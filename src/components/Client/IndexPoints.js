import React from 'react'
import { Link } from 'gatsby'

import style from '../../styles/Client.module.sass'
import { zip } from '../../helpers.js'

var points = [
  {
    text: 'Get Involved',
    link: 'events',
  },
  {
    text: 'Get Informed',
    link: 'faqs',
  },
  {
    text: 'Reach Out',
    link: 'reachout',
  },
]
points = points.map((el, i) => (
  <h3 className={style.indexPointCasing}>
    <Link className={style.indexPoint} to={el.link}>
      {el.text}
    </Link>
  </h3>
))
var intermediate_bars = Array(points.length).fill(
  <h3 className="index-point-vertical">|</h3>
)

var points_jsx = zip([points, intermediate_bars])
points_jsx.splice(-1, 1)

const IndexPoints = () => (
  <div className={style.indexPointWrapper}>{points_jsx}</div>
)

export default IndexPoints
