import React from 'react'
import { AppErrorMsg, AppLoading } from '/client/configs/components'

class PostCreate extends React.Component {

  displayUser() {

    const { error } = this.props

    return (
      <form id="create-post" onSubmit={ this.createPost.bind( this ) }>
        <AppErrorMsg error={ error } />
        <div className="form-group">
          <label for="title">Title</label>
          <input ref="title" type="text" className="form-control" placeholder="Give a short title to your post." />
        </div>
        <div className="form-group">
          <label for="content">Content</label>
          <input ref="content" type="text" className="form-control" placeholder="Something interesting..." />
        </div>
        <input type="submit" className="btn btn-success" value="New Post" />
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

    if ( loggingIn ) { return this.displayLoading() }

    return (
      <div>
      { loggedIn ? this.displayUser() : this.displayGuest() }
      </div>
    )
  }

  createPost( event ) {
    event.preventDefault()
    const { create } = this.props
    const { title, content } = this.refs

    create( title.value, content.value )
  }
}

export default PostCreate
