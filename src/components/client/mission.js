import React from "react"
import style from "../../styles/mission.module.sass"

const IndexMission = ({ mission }) => (
  <div className={style.indexMissionContainer}>
    <h3>Our Mission</h3>
    <hr />
    <p className={style.indexMission}>
      <span className={style.firstLetter}>{mission[0]}</span>
      {mission.slice(1)}{" "}
    </p>
  </div>
)

export default IndexMission
