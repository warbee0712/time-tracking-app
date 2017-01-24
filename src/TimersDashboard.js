import React from 'react'
import { Grid } from 'semantic-ui-react'
import uuid from 'uuid'

import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import { newTimer } from './helpers'

class TimerDashboard extends React.Component {
  constructor () {
    super()

    this.state = {
      timers: [
        {
          title: 'Practice Tennis',
          project: 'Gym Chores',
          id: uuid.v4(),
          elapsed: 5456099,
          runningSince: Date.now()
        },
        {
          title: 'Bake Cake',
          project: 'Kitchen Chores',
          id: uuid.v4(),
          elapsed: 1273998,
          runningSince: null
        }
      ]
    }
  }
  updateTimer (attrs) {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project
          })
        } else {
          return timer
        }
      })
    })
  }
  createTimer (timer) {
    const t = newTimer(timer)
    this.setState({
      timers: this.state.timers.concat(t)
    })
  }
  deleteTimer (timerId) {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId)
    })
  }
  render () {
    return (
      <Grid columns='3' centered>
        <Grid.Column>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={attrs => this.updateTimer(attrs)}
            onTrashClick={timerId => this.deleteTimer(timerId)}
          />
          <ToggleableTimerForm
            onFormSubmit={timer => this.createTimer(timer)}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default TimerDashboard
