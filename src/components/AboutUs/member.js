import React from 'react'

import style from '../../styles/aboutus.module.sass'

const Member = ({ member }) => (
  <div className={style.member} key={member.id}>
    <img src={member.picture} alt={member.name} />
    <div className={style.description}>
      <h4>{member.name}</h4>
      <p>{member.description}</p>
    </div>
  </div>
)

export default Member
