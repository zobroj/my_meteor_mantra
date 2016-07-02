import React from 'react'
import { AppErrorMsg, AppLoading } from '/client/configs/components'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap'

class PostCreate extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      title: '',
      content: '',
    }
  }

  handleTitleChange( event ) {
    this.setState({ title: event.target.value })
  }
  handleContentChange( event ) {
    this.setState({ content: event.target.value })
  }

  displayUser() {

    const { error } = this.props

    return (
      <form onSubmit={ this.createPost.bind( this ) }>
        <AppErrorMsg error={ error } />
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Give a short title to your post."
            value={ this.state.title }
            onChange={ this.handleTitleChange.bind( this ) }
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Content</ControlLabel>
          <FormControl
            type="text"
            placeholder="Something interesting..."
            value={ this.state.content }
            onChange={ this.handleContentChange.bind( this ) }
          />
        </FormGroup>
        <Button type="submit">New Post</Button>
      </form>
    )
  }

  displayGuest() {
    return (
      <div>
        <p>Log in, or create an account to add a conversation.</p>
      </div>
    )
  }

  displayLoading() {
    return (
      <AppLoading />
    )
  }

  render() {
    const { loggedIn, loggingIn } = this.props
    const { emailVerified } = this.props.Users()

    if ( loggingIn ) { return this.displayLoading() }

    if ( loggedIn && !emailVerified ) {
      return (
        <div>This functionality is not available to unverfied users.</div>
      )
    }

    if ( loggedIn ) {
      return this.displayUser()
    } else {
      return this.displayGuet()
    }
  }

  createPost( event ) {
    event.preventDefault()
    const { create } = this.props
    const { title, content } = this.state

    create( title, content )
  }
}

export default PostCreate
