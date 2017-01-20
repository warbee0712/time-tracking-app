import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'
import TimersDashboard from './TimersDashboard'

import 'semantic-ui-css/semantic.css'

class App extends Component {
  render () {
    return (
      <Container>
        <Divider hidden />
        <Header as='h1' dividing textAlign='center'>Timers</Header>
        <TimersDashboard />
      </Container>
    )
  }
}

export default App
