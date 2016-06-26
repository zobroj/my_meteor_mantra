import React from 'react'
import Comment from './comment'

const CommentList = React.createClass({
  render: function() {
    const commentNodes = this.props.data.map( ( comment ) => {
      return (
        <Comment author={ comment.author } key={ comment.id }>
          { comment.text }
        </Comment>
      )
    })
    return (
      <div className="commentList">
        { commentNodes }
      </div>
    )
  }
})

export default CommentList
