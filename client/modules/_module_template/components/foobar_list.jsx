import React from 'react'
import { AccountNotLoggedIn, AppLoading } from '/client/configs/components'
import {
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'

class FoobarList extends React.Component {
  displayUser() {
    const { foobars } = this.props
    const foobarNodes = foobars.map( foobar => (
        <ListGroupItem key={ foobar._id }>
          { foobar.name }
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
