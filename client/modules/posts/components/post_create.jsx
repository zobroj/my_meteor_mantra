import React from 'react';
import { AppErrorMsg, AppLoading } from '/client/configs/components';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this._createPost = this._createPost.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }
  displayUser() {
    const { error } = this.props;
    return (
      <form onSubmit={this._createPost}>
        <AppErrorMsg error={error} />
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Give a short title to your post."
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Content</ControlLabel>
          <FormControl
            type="text"
            placeholder="Something interesting..."
            value={this.state.content}
            onChange={this.handleContentChange}
          />
        </FormGroup>
        <Button type="submit">New Post</Button>
      </form>
    );
  }
  displayGuest() {
    return (
      <div>
        <p>Log in, or create an account to add a conversation.</p>
      </div>
    );
  }
  displayLoading() {
    return (
      <AppLoading />
    );
  }
  _createPost(event) {
    event.preventDefault();
    const { create } = this.props;
    const { title, content } = this.state;
    create(title, content);
    this.setState({
      title: '',
      content: '',
    });
  }
  render() {
    const { loggedIn, loggingIn, emailVerified } = this.props;
    if (loggingIn) { return this.displayLoading(); }
    if (loggedIn && !emailVerified) {
      return (
        <div>This functionality is not available to unverfied users.</div>
      );
    }
    if (loggedIn) { return this.displayUser(); }
    return this.displayGuest();
  }
}

export default PostCreate;

PostCreate.propTypes = {
  create: React.PropTypes.func,
  error: React.PropTypes.string,
  emailVerified: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
};
