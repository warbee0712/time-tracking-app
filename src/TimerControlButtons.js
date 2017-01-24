import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const visibleButtonsStyle = {
  visibility: 'visible',
  opacity: 1,
  transition: 'opacity .25s ease-in'
}

const hiddenButtonsStyle = {
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity .25s ease-in'
}

const TimerControlButtons = props => {
  return (
    <Card.Content
      style={
        props.showButtons
        ? visibleButtonsStyle
        : hiddenButtonsStyle
      }
      extra>
      <span className="right floated">
        <Icon
          name='edit'
          onClick={props.onEditClick}
          style={{ cursor: 'pointer' }}
        />
      </span>
      <span className="right floated">
        <Icon
          name='trash'
          style={{ cursor: 'pointer' }}
          onClick={() => props.onTrashClick(props.id)}
        />
      </span>
    </Card.Content>
  )
}

export default TimerControlButtons
