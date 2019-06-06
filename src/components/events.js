import React from 'react'

import style from '../styles/Events.module.sass'

const Events = () => (
  <div className={style.page}>
    <h3 className={style.tag}>Upcoming Events</h3>
    <iframe
      title="Google Calendar"
      src="https://calendar.google.com/calendar/embed?src=harvardvets%40gmail.com&ctz=America%2FNew_York"
      className={style.cal}
    />
  </div>
)

export default Events
