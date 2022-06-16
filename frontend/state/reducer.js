// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

const initialWheelState = {
  wheel: 0
}
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case types.MOVE_CLOCKWISE:
      return ({...state, wheel: state.wheel !== 5 ? state.wheel + 1 : 0})
    case types.MOVE_COUNTERCLOCKWISE:
      return({...state, wheel: state.wheel ? state.wheel - 1 : 5});
    default: 
      return state;
  }
}

const initialQuizState = []
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE:
      return ({...action.payload});
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case types.SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
