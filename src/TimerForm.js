import React from 'react'
import { Card, Form, Button } from 'semantic-ui-react'

class TimerForm extends React.Component {
  constructor () {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.refs.title.value,
      project: this.refs.project.value
    })
  }
  render () {
    const submitText = this.props.id ? 'Update' : 'Create'
    return (
      <Card centered>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input type='text' ref='title' defaultValue={this.props.title}/>
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input type='text' ref='project' defaultValue={this.props.project}/>
            </Form.Field>
            <Button.Group attached='bottom'>
              <Button as='button' basic color='blue' onClick={this.handleSubmit}>{ submitText }</Button>
              <Button as='button' basic color='red' onClick={this.props.onFormClose}>Cancel</Button>
            </Button.Group>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

export default TimerForm
