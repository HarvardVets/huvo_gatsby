import React from "react"
import { StaticQuery, graphql } from "gatsby"

import IndexMission from "./client/mission.js"
import IndexPoints from "./client/indexpoints.js"
import style from "./../styles/client.module.sass"

const Client = () => (
  <StaticQuery
    query={graphql`
      query SiteMission {
        site {
          siteMetadata {
            mission
          }
        }
      }
    `}
    render={data => (
      <div className={style.clientIndexPage}>
        <div>
          <div className={style.indexSplashContainer} />
          <IndexPoints style={style} />
          <IndexMission
            mission={data.site.siteMetadata.mission}
            style={style}
          />
        </div>
      </div>
    )}
  />
)

export default Client
