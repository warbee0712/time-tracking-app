import React from 'react'
import { Card, Header, Icon } from 'semantic-ui-react'
import { renderElapsedString } from './helpers'

import TimerActionButton from './TimerActionButton'

class Timer extends React.Component {
  componentDidMount () {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  }
  componentWillUnmount () {
    clearInterval(this.forceUpdateInterval)
  }
  render () {
    const elapsedString = renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    )
    return (
      <Card centered>
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
          <Card.Content extra>
            <span className="right floated">
              <Icon
                name='edit'
                onClick={this.props.onEditClick}
                style={{ cursor: 'pointer' }}
              />
            </span>
            <span className="right floated">
              <Icon
                name='trash'
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.onTrashClick(this.props.id)}
              />
            </span>
          </Card.Content>
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
