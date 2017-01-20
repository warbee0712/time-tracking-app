import React from 'react'

import EditableTimer from './EditableTimer'

const EditableTimerList = () => (
  <div>
    <EditableTimer
      title='Learn React'
      project='Web Domination'
      elapsed='8986300'
      runingSince={null}
      editFormOpen={false}
    />
    <EditableTimer
      title='Learn extreme ironing'
      project='World Domination'
      elapsed='3890985'
      runingSince={null}
      editFormOpen={true}
    />
  </div>
)

export default EditableTimerList
