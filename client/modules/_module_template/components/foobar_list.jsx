import React from 'react'
import { AccountNotLoggedIn, AppLoading } from '/client/configs/components'
import {
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Panel,
  Row,
} from 'react-bootstrap'

class FoobarList extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      exampleState: '',
    }
    this.handleButtonClick = this.handleButtonClick.bind( this )
  }
  handleButtonClick() {
    console.log('you clicky the button!')
  }
  displayUser() {
    const { foobars } = this.props
    const foobarNodes = foobars.map( foobar => (
        <ListGroupItem key={ foobar._id }>
          <a onClick={ this.handleButtonClick }
            href={ `/foobar/${foobar.name}` }>{ foobar.name }
          </a>
        </ListGroupItem>
      )
    )
    return (
      <Row>
        <Panel header="Foobars List">
          <ListGroup fill>
            { foobarNodes }
          </ListGroup>
        </Panel>
      </Row>
    )
  }
  displayGuest() {
    return (
      <Row>
        <Panel header="Foobars Test Page">
          <ListGroup>
            <AccountNotLoggedIn />
          </ListGroup>
        </Panel>
      </Row>
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
    if ( loggedIn ) {
      return this.displayUser()
    } else {
      return this.displayGuest()
    }
  }
}

export default FoobarList
