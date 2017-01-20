import React from 'react'
import { Card, Form, Button } from 'semantic-ui-react'

const TimerForm = props => {
  const submitText = props.title ? 'Update' : 'Create'
  return (
    <Card centered>
      <Card.Content>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input type='text' defaultValue={props.title}/>
          </Form.Field>
          <Form.Field>
            <label>Project</label>
            <input type='text' defaultValue={props.project}/>
          </Form.Field>
          <Button.Group attached='bottom'>
            <Button basic color='blue'>{ submitText }</Button>
            <Button basic color='red'>Cancel</Button>
          </Button.Group>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default TimerForm
