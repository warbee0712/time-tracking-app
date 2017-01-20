import React from 'react'
import { Grid } from 'semantic-ui-react'

import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

const TimerDashboard = () => (
  <Grid columns='3' centered>
    <Grid.Column>
      <EditableTimerList />
      <ToggleableTimerForm
        isOpen={true}
      />
    </Grid.Column>
  </Grid>
)

export default TimerDashboard
