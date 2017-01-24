import React from 'react'

import TimerForm from './TimerForm'
import Timer from './Timer'

class EditableTimer extends React.Component {
  constructor () {
    super()

    this.state = {
      editFormOpen: false
    }

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleFormClose = this.handleFormClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.openForm = this.openForm.bind(this)
  }
  handleEditClick () {
    this.openForm()
  }
  handleFormClose (e) {
    e.preventDefault()
    this.closeForm()
  }
  handleSubmit (timer) {
    this.props.onFormSubmit(timer)
    this.closeForm()
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
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
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
          onEditClick={this.handleEditClick}
        />
      )
    }
  }
}

export default EditableTimer
