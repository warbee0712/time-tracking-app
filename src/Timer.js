import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import { renderElapsedString } from './helpers'

import TimerActionButton from './TimerActionButton'
import TimerControlButtons from './TimerControlButtons'

class Timer extends React.Component {
  constructor () {
    super()

    this.state = {
      showButtons: false
    }
  }
  componentDidMount () {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  }
  componentWillUnmount () {
    clearInterval(this.forceUpdateInterval)
    clearTimeout(this.showButtonsTimeout)
  }
  showButtons () {
    this.setState({ showButtons: true })
  }
  hideButtons () {
    this.setState({ showButtons: false })
  }
  render () {
    const elapsedString = renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    )
    return (
      <Card
        centered
        onMouseEnter={() => this.showButtonsTimeout = setInterval(() => this.showButtons(), 500)}
        onMouseLeave={() => {
          clearTimeout(this.showButtonsTimeout)
          this.hideButtons()
        }}>
        <Card.Content>
          <Card.Header>
            {this.props.title}
          </Card.Header>
          <Card.Meta>
            {this.props.project}
          </Card.Meta>
          <Card.Description>
            <Header as='h2' textAlign='center'>{ elapsedString }</Header>
          </Card.Description>
          <TimerControlButtons
            id={this.props.id}
            showButtons={this.state.showButtons}
            onTrashClick={this.props.onTrashClick}
            onEditClick={this.props.onEditClick}
          />
        </Card.Content>
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={() => this.props.onStartClick(this.props.id)}
          onStopClick={() => this.props.onStopClick(this.props.id)}
        />
      </Card>
    )
  }
}

export default Timer
