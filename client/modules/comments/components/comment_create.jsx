import React from 'react';

class CommentCreate extends React.Component {
  render() {

    const { error } = this.props

    return (
      <form onSubmit={ this.createComment.bind( this ) }>
        { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
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

  createComment( event ) {
    event.preventDefault()

    const { create, postId } = this.props
    const { author, content } = this.refs

    create( postId, author.value, content.value )

    this.refs.author.value = ''
    this.refs.content.value = ''
  }
}

export default CommentCreate;
