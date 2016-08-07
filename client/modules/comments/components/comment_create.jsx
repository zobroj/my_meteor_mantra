import React from 'react';
import { AppErrorMsg, AppLoading } from '/client/configs/components';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

class CommentCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
    this._createComment = this._createComment.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }
  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }
  displayUser() {
    const { error } = this.props;
    return (
      <form onSubmit={this._createComment}>
        <AppErrorMsg error={error} />
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Your comment...."
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </FormGroup>
        <Button type="submit">Add Comment</Button>
      </form>
    );
  }
  displayGuest() {
    return (
      <div>
        <p>To add a comment, log in or create an account.</p>
      </div>
    );
  }
  displayLoading() {
    return (
      <AppLoading />
    );
  }
  _createComment(event) {
    event.preventDefault();
    const { create, postId, user } = this.props;
    const { comment } = this.state;
    create( user.id, user.username, postId, comment);
    this.setState({ comment: '' });
  }
  render() {
    const { loggedIn, loggingIn, emailVerified } = this.props;
    if (loggingIn) { return this.displayLoading(); }
    if (loggedIn && !emailVerified) {
      return (
        <div>This functionality is not available to unverfied users.</div>
      );
    }
    if (loggedIn) {
      return this.displayUser();
    }
    return this.displayGuest();
  }
}

export default CommentCreate;

CommentCreate.propTypes = {
  create: React.PropTypes.func,
  postId: React.PropTypes.string,
  error: React.PropTypes.string,
  emailVerified: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  user: React.PropTypes.object,
};
