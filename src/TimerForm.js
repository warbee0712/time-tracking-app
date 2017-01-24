import React from 'react'
import { Card, Form, Button, Message } from 'semantic-ui-react'

class TimerForm extends React.Component {
  constructor () {
    super()

    this.state = {
      errorsList: []
    }
  }
  handleSubmit () {
    if (this.refs.title.value && this.refs.project.value) {
      this.props.onFormSubmit({
        id: this.props.id,
        title: this.refs.title.value,
        project: this.refs.project.value
      })
    } else {
      let errorsList = []
      if (!this.refs.title.value) {
        errorsList.push('The title cannot be empty.')
      }
      if (!this.refs.project.value) {
        errorsList.push('The project cannot be empty.')
      }
      this.setState({ errorsList })
    }
  }
  render () {
    const submitText = this.props.id ? 'Update' : 'Create'
    return (
      <Card centered>
        <Card.Content>
          <Form error={this.state.errorsList.length > 0}>
            <Form.Field>
              <label>Title</label>
              <input type='text' ref='title' defaultValue={this.props.title}/>
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input type='text' ref='project' defaultValue={this.props.project}/>
            </Form.Field>
            <Message
              error
              list={this.state.errorsList}
            />
            <Button.Group attached='bottom'>
              <Button as='div' basic color='blue' onClick={this.handleSubmit.bind(this)}>{ submitText }</Button>
              <Button as='div' basic color='red' onClick={this.props.onFormClose}>Cancel</Button>
            </Button.Group>
          </Form>
        </Card.Content>
      </Card>
    )
  }
}

export default TimerForm
