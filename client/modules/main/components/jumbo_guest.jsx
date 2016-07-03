import React from 'react'
import {
  Grid,
  Jumbotron,
} from 'react-bootstrap'

class JumboGuest extends React.Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <h1>Introduction</h1>
          <p>Hello, World.</p>
        </Grid>
      </Jumbotron>
    )
  }
}

export default JumboGuest
