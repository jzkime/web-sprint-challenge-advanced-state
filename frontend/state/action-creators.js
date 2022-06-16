import * as types from './action-types'
import axios from 'axios'

const URL = 'http://localhost:9000/api/quiz'

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return({type: types.MOVE_CLOCKWISE})
 }

export function moveCounterClockwise() { 
  return({type: types.MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer(id) {
  return 
}

export function setMessage() { }

export function setQuiz() { 
  return function(dispatch) {
    axios.get(`${URL}/next`)
      .then(res => {
      dispatch({type: types.SET_QUIZ_INTO_STATE, payload: res.data})
    })
    .catch(err => console.error(err))
  }
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get(`${URL}/next`)
    .then(res => {
      dispatch({type: types.SET_QUIZ_INTO_STATE, payload: res.data})
    })
  }
}
export function postAnswer(quizId, ansId) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios.post(`${URL}/answer`, { "quiz_id": quizId, "answer_id": ansId } )
      .then(res => {
        dispatch({type: types.SET_SELECTED_ANSWER, payload: res.data.message});
      }).catch(err => console.error(err))
  }
  
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
