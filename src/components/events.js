import React from 'react'

import style from '../styles/events.module.sass'

const Events = () => (
  <div className={style.page}>
    <div className={style.marquee}>
      <h3 className={style.tag}>Upcoming Events</h3>
    </div>
    <div className={style.wrapper}>
      <iframe
        title="Google Calendar"
        src="https://calendar.google.com/calendar/embed?src=harvardvets%40gmail.com&ctz=America%2FNew_York"
        className={style.cal}
      />
    </div>
  </div>
)

export default Events
