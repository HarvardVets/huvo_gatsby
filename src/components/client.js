import React from 'react'
import IndexMission from './Client/mission.js'
import IndexPoints from './Client/IndexPoints.js'
import style from '../styles/Client.module.sass'

const Client = () => (
  <div className={style.clientIndexPage}>
    <div>
      <div className={style.indexSplashContainer} />
      <IndexPoints />
      <IndexMission />
    </div>
  </div>
)

export default Client
