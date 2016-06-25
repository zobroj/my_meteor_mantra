import React from 'react'
import { AppErrorMsg, AppLoading } from '/client/configs/components'

class CommentCreate extends React.Component {

  displayUser() {

    const { error } = this.props

    return (
      <form onSubmit={ this.createComment.bind( this ) }>
        <AppErrorMsg error={ error } />
        <div className="form-group">
          <label for="author">Your Name</label>
          <input ref="author" type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label for="content">Content</label>
          <textarea ref="content" className="form-control" placeholder="Your comment...."></textarea>
        </div>
        <input type="submit" className="btn btn-success" value="Add Comment" />
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

    if ( loggingIn ) { return this.displayLoading() }

    return (
      <div>
      { loggedIn ? this.displayUser() : this.displayGuest() }
      </div>
    )
  }

  createComment( event ) {
    event.preventDefault()

    const { create, postId } = this.props
    const { author, content } = this.refs

    create( postId, author.value, content.value )

    this.refs.author.value = ''
    this.refs.content.value = ''
  }
}

export default CommentCreate
