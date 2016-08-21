import React from 'react';
import {AppErrorMsg, AuthEnsureUser} from '/client/configs/components';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this._createPost = this._createPost.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ text: event.target.value });
  }
  _createPost() {
    const { create, user } = this.props;
    const { title, text } = this.state;
    create(user.id, user.username, title, text);
    this.setState({
      title: '',
      text: '',
    });
  }
  render() {
    const { error } = this.props;
    return (
      <AuthEnsureUser guestMessage={GuestMessage}>
        <form id="post-create-form">
          <AppErrorMsg error={error} />
          <FormGroup className="title-input">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Give a short title to your post."
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </FormGroup>
          <FormGroup className="text-input">
            <ControlLabel>Content</ControlLabel>
            <FormControl
              type="text"
              placeholder="Something interesting..."
              value={this.state.text}
              onChange={this.handleContentChange}
            />
          </FormGroup>
          <Button onClick={this._createPost}>New Post</Button>
        </form>
      </AuthEnsureUser>
    );
  }
}

export const GuestMessage = (
  <div>
    Please login to create a post.
  </div>
);

export default PostCreate;

PostCreate.propTypes = {
  create: React.PropTypes.func,
  error: React.PropTypes.string,
  user: React.PropTypes.object,
};
