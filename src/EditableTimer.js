import React from 'react'

import TimerForm from './TimerForm'
import Timer from './Timer'

class EditableTimer extends React.Component {
  constructor () {
    super()

    this.state = {
      editFormOpen: false
    }
  }
  render () {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
        />
      )
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runingSince={this.props.runingSince}
        />
      )
    }
  }
}

export default EditableTimer
