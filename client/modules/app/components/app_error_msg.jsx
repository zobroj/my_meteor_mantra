import React from 'react'

class AppErrorMsg extends React.Component {
  render() {

    const { error } = this.props

    return (
      <div>
      { error ? <p style={ { color: 'red' } }>{ error }</p> : null }
      </div>
    )
  }
}

export default AppErrorMsg
