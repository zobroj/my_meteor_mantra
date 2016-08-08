import React from 'react';
import { AppErrorMsg, AuthCheck } from '/client/configs/components';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

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
  _createPost(event) {
    event.preventDefault();
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
      <AuthCheck>
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
              value={this.state.text}
              onChange={this.handleContentChange}
            />
          </FormGroup>
          <Button type="submit">New Post</Button>
        </form>
      </AuthCheck>
    );
  }
}

export default PostCreate;

PostCreate.propTypes = {
  create: React.PropTypes.func,
  error: React.PropTypes.string,
  user: React.PropTypes.object,
};
