import React from 'react'
import { StaticQuery } from 'gatsby'

import IndexMission from './Client/mission.js'
import IndexPoints from './Client/IndexPoints.js'
import style from '../styles/Client.module.sass'

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
          <IndexPoints />
          <IndexMission mission={data.site.siteMetadata.mission} />
        </div>
      </div>
    )}
  />
)

export default Client
