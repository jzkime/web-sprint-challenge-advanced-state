import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setQuiz, postAnswer, fetchQuiz, selectAnswer, setMessage } from '../state/action-creators'

function Quiz(props) {
  const { quiz } = props
  useEffect(() => {
    if(!Object.keys(quiz).length)props.setQuiz()
  }, [])

  const handleSelected = (id) => {
    props.selectedAnswer !== id && props.selectAnswer(id);
  }

  const handleNewQuiz = () => {
    props.postAnswer(quiz.quiz_id, props.selectedAnswer)
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              {quiz.answers && quiz.answers.map(a => {
                return <div className={`answer ${a.answer_id === props.selectedAnswer && 'selected'}`} key={a.answer_id}>
                {a.text}
                <button onClick={() => handleSelected(a.answer_id)}>
                  {a.answer_id === props.selectedAnswer ? 'SELECTED' : 'select'}
                </button>
              </div>
              })}
            </div>

            <button id="submitAnswerBtn" className={`button`} disabled={!props.selectedAnswer} onClick={handleNewQuiz} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, { setQuiz, postAnswer, fetchQuiz, selectAnswer, setMessage })(Quiz);
