import React from 'react'
import { Grid } from 'semantic-ui-react'
import uuid from 'uuid'

import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

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
  render () {
    return (
      <Grid columns='3' centered>
        <Grid.Column>
          <EditableTimerList
            timers={this.state.timers}
          />
          <ToggleableTimerForm
            isOpen={true}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default TimerDashboard
