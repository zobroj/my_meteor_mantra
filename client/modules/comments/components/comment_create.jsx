import React from 'react'
import { AppErrorMsg, AppLoading } from '/client/configs/components'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap'

class CommentCreate extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      comment: '',
    }
  }
  handleCommentChange( event ) {
    this.setState({ comment: event.target.value })
  }
  displayUser() {
    const { error } = this.props
    return (
      <form onSubmit={ this.createComment.bind( this ) }>
        <AppErrorMsg error={ error } />
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Your comment...."
            value={ this.state.comment }
            onChange={ this.handleCommentChange.bind( this ) }
          />
        </FormGroup>
        <Button type="submit">Add Comment</Button>
      </form>
    )
  }
  displayGuest() {
    return (
      <div>
        <p>To add a comment, log in or create an account.</p>
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
      return this.displayGuest()
    }
  }
  createComment( event ) {
    event.preventDefault()
    const { create, postId } = this.props
    const { comment } = this.state
    create( postId, comment )
    this.setState({ comment: '' })
  }
}

export default CommentCreate
