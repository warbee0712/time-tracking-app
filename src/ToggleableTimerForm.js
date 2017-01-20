import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

import TimerForm from './TimerForm'

const ToggleableTimerForm = props => {
  if (props.isOpen) {
    return <TimerForm />
  } else {
    return (
      <Segment basic textAlign='center'>
        <Button
          basic
          icon='plus icon'
        />
      </Segment>
    )
  }
}

export default ToggleableTimerForm
