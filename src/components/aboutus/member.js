import React from "react"

import style from "../../styles/aboutus.module.sass"

const Member = ({ member }) => (
  <div className={style.member} key={member.id}>
    <img src={member.picture} alt={member.name} />
    <div className={style.description}>
      <div className={style.titleBlock}>
        <h3>{member.name}</h3>
        <h5>{member.title}</h5>
        <hr />
      </div>
      <p>{member.description}</p>
    </div>
  </div>
)

export default Member
