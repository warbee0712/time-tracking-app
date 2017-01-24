import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

import TimerForm from './TimerForm'

class ToggleableTimerForm extends React.Component {
  constructor () {
    super()

    this.state = {
      isOpen: false
    }

    this.handleFormOpen = this.handleFormOpen.bind(this)
    this.handleFormClose = this.handleFormClose.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormOpen () {
    this.setState({ isOpen: true })
  }
  handleFormClose (e) {
    e.preventDefault()
    this.setState({ isOpen: false })
  }
  handleFormSubmit (timer) {
    this.props.onFormSubmit(timer)
    this.setState({ isOpen: false })
  }
  render () {
    if (this.state.isOpen) {
      return <TimerForm
                onFormSubmit={this.handleFormSubmit}
                onFormClose={this.handleFormClose}
              />
    } else {
      return (
        <Segment basic textAlign='center'>
          <Button
            basic
            icon='plus'
            onClick={this.handleFormOpen}
          />
        </Segment>
      )
    }
  }
}

export default ToggleableTimerForm
