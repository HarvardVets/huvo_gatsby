import React from 'react'

const IndexMission = ({ mission, style }) => (
  <div className={style.indexMissionContainer}>
    <p className={style.indexMission}>
      <span className={style.firstLetter}>{mission[0]}</span>
      {mission.slice(1)}{' '}
    </p>
  </div>
)

export default IndexMission
