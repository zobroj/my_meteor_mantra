import React from 'react';
import { AuthCheck } from '/client/configs/components';
import { Col, DropdownButton, ListGroup, MenuItem, Panel, Row } from 'react-bootstrap';

class BootstrapExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fruitDropdown: 'None' };
    this.handleFruitSelectChange = this.handleFruitSelectChange.bind(this);
  }
  handleFruitSelectChange(event, eventKey) {
    console.log('you clicky the button!');
    this.setState({ fruitDropdown: eventKey.target.value });
  }
  fruitSelect() {
    return (
      <Row>
        <Col sm={3}>
          <DropdownButton
            title="Select Fruit"
            id="select-fruit"
            onSelect={this.handleFruitSelectChange}
            key={this.state.fruitDropdown}
          >
            <MenuItem value="None" eventKey="1">None</MenuItem>
            <MenuItem divider />
            <MenuItem value="Apple" eventKey="2">Apple</MenuItem>
            <MenuItem value="Orange" eventKey="3">Orange</MenuItem>
            <MenuItem value="Banana" eventKey="4">Banana</MenuItem>
          </DropdownButton>
        </Col>
        <Col sm={3}>
          {`Selected fruit is: ${this.state.fruitDropdown}`}
        </Col>
      </Row>
    );
  }
  render() {
    return (
        <Row>
          <Panel header="Buttons">
            <AuthCheck>
              <ListGroup fill>
                {this.fruitSelect()}
              </ListGroup>
            </AuthCheck>
          </Panel>
        </Row>
    );
  }
}

export default BootstrapExamples;
