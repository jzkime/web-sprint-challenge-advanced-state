import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {
  const { wheel, moveClockwise, moveCounterClockwise } = props
  const wh = wheel.wheel
  const isIt = (num, doThis) => {
    if(wh === num) {
      return doThis === "a" ? "active" : "B"
    }
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${isIt(0, 'a')}`} style={{ "--i": 0 }}>{isIt(0)}</div>
        <div className={`cog ${isIt(1, 'a')}`} style={{ "--i": 1 }}>{isIt(1)}</div>
        <div className={`cog ${isIt(2, 'a')}`} style={{ "--i": 2 }}>{isIt(2)}</div>
        <div className={`cog ${isIt(3, 'a')}`} style={{ "--i": 3 }}>{isIt(3)}</div>
        <div className={`cog ${isIt(4, 'a')}`} style={{ "--i": 4 }}>{isIt(4)}</div>
        <div className={`cog ${isIt(5, 'a')}`} style={{ "--i": 5 }}>{isIt(5)}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, {moveClockwise, moveCounterClockwise})(Wheel)
