import React from 'react'

import style from '../../styles/Mission.module.sass'

const IndexMission = ({ mission }) => (
  <div className={style.indexMissionContainer}>
    <p className={style.indexMission}>
      <span className={style.firstLetter}>{mission[0]}</span>
      {mission.slice(1)}{' '}
    </p>
  </div>
)

export default IndexMission
