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
  closeForm () {
    this.setState({ editFormOpen: false })
  }
  openForm () {
    this.setState({ editFormOpen: true })
  }
  render () {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          onFormSubmit={timer => {
            this.props.onFormSubmit(timer)
            this.closeForm()
          }}
          onFormClose={e => {
            e.preventDefault()
            this.closeForm()
          }}
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
          onEditClick={() => this.openForm()}
          onTrashClick={this.props.onTrashClick}
        />
      )
    }
  }
}

export default EditableTimer
