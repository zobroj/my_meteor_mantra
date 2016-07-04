import React from 'react'

const AppErrorMsg = ( props ) => (
  <div>
  { props.error ? <p style={ { color: 'red' } }>{ props.error }</p> : null }
  </div>
)

export default AppErrorMsg
