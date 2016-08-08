import React from 'react';
import { AuthCheck } from '/client/configs/components';
import { ListGroup, ListGroupItem, Panel, Row } from 'react-bootstrap';

class FoobarList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleState: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    console.log('you clicky the button!');
  }
  render() {
    const { foobars } = this.props;
    const foobarNodes = foobars.map(foobar => (
      <ListGroupItem key={foobar._id}>
        <a onClick={this.handleButtonClick} href={`/foobar/${foobar.name}`}>{foobar.name}</a>
      </ListGroupItem>
    ));
    return (
      <AuthCheck>
        <Row>
          <Panel header="Foobars List">
            <ListGroup fill>
              {foobarNodes}
            </ListGroup>
          </Panel>
        </Row>
      </AuthCheck>
    );
  }
}

export default FoobarList;

FoobarList.propTypes = {
  foobars: React.PropTypes.array,
};
