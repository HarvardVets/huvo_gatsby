import React from "react"
import { Link } from "gatsby"

import { zip } from "../../utils/helpers.js"
import style from "../../styles/client.module.sass"

// ##TODO: factor this into graphql
var points = [
  {
    text: "Harvard Undergraduate Veterans Organization",
  },
  /*
  {
    text: "Get Informed",
    link: "https://college.harvard.edu/admissions/apply/us-military-veterans",
  },
  {
    text: "Reach Out",
    link: "reachout",
  },
*/
]

class IndexPoints extends React.Component {
  render() {
    let new_points = points.map((el, i) => (
      <h3 className={style.indexPointCasing} key={i}>
        <Link className={style.indexPoint} to={el.link}>
          {el.text}
        </Link>
      </h3>
    ))

    // use 2*length of points to key the bars i.o.t suppress React errors. Seems kind of silly though as we will never update this
    var e = points.length * 2 - 1
    var intermediate_bars = Array(points.length)
      .fill(0)
      .map((_, i) => (
        <h3 className="index-point-vertical" key={e - i}>
          |
        </h3>
      ))
    // zip together the bars and points jsx then splice the last bar off
    var points_jsx = zip([new_points, intermediate_bars])
    points_jsx.splice(-1, 1)
    return <div className={style.indexPointWrapper}>{points_jsx}</div>
  }
}

export default IndexPoints
