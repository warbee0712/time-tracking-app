import React from 'react'

import EditableTimer from './EditableTimer'

const EditableTimerList = props => (
  <div>
    {props.timers.map(timer => (
      <EditableTimer
        key={timer.id}
        {...timer}
        onFormSubmit={props.onFormSubmit}
      />
    ))}
  </div>
)

export default EditableTimerList
