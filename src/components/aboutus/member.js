import React from 'react'

const Member = ({ member, style }) => (
  <div className={style.member} key={member.id}>
    <img src={member.picture} alt={member.name} />
    <div className={style.description}>
      <h4>{member.name}</h4>
      <p>{member.description}</p>
    </div>
  </div>
)

export default Member