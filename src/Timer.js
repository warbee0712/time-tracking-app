import React from 'react'
import { Card, Header, Icon, Button } from 'semantic-ui-react'
import { renderElapsedString } from './helpers'

const Timer = props => {
  const elapsedString = renderElapsedString(props.elapsed)
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>
          {props.title}
        </Card.Header>
        <Card.Meta>
          {props.project}
        </Card.Meta>
        <Card.Description>
          <Header as='h2' textAlign='center'>{ elapsedString }</Header>
        </Card.Description>
        <Card.Content extra>
          <span className="right floated">
            <Icon name='edit' />
          </span>
          <span className="right floated">
            <Icon name='trash' />
          </span>
        </Card.Content>
      </Card.Content>
      <Button attached='bottom' color='blue' basic>
        Start
      </Button>

    </Card>
  )
}

export default Timer
