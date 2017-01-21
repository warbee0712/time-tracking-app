import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

import TimerForm from './TimerForm'

class ToggleableTimerForm extends React.Component {
  constructor () {
    super()

    this.state = {
      isOpen: false
    }
  }
  handleFormOpen () {
    this.setState({ isOpen: true })
  }
  render () {
    if (this.state.isOpen) {
      return <TimerForm />
    } else {
      return (
        <Segment basic textAlign='center'>
          <Button
            basic
            icon='plus'
            onClick={this.handleFormOpen.bind(this)}
          />
        </Segment>
      )
    }
  }
}

export default ToggleableTimerForm
