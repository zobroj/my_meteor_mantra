import React from 'react';
import { AppErrorMsg } from '/client/configs/components'

class PostCreate extends React.Component {

  render() {

    const { error } = this.props

    return (
      <form id="create-post" onSubmit={ this.createPost.bind( this ) }>
        <AppErrorMsg error={ error } />
        <div className="form-group">
          <label for="author">Your Name</label>
          <input ref="author" type="text" className="form-control" placeholder="Your Name" />
        </div>
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

  createPost( event ) {
    event.preventDefault()

    const { create } = this.props
    const { author, title, content } = this.refs

    create( author.value, title.value, content.value )
  }
}

export default PostCreate;
