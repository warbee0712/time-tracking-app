import React from 'react'

import EditableTimer from './EditableTimer'

const EditableTimerList = props => (
  <div>
    {props.timers.map(timer => (
      <EditableTimer
        key={timer.id}
        {...timer}
      />
    ))}
  </div>
)

export default EditableTimerList
