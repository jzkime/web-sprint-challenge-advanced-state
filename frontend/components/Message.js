import React from 'react'
import { connect } from 'react-redux'

 function Message(props) {
  console.log(props.infoMessage)
  return <div id="message">{props.infoMessage}</div>
}

export default connect(st => st)(Message)
