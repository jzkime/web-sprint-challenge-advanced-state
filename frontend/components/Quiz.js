import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setQuiz, postAnswer, fetchQuiz } from '../state/action-creators'

function Quiz(props) {
  const { quiz } = props
  const [ selected, setSelected ] = useState('')
  useEffect(() => {
    props.setQuiz()
  }, [])

  const handleSelected = (id) => {
    selected !== id && setSelected(id);
  }

  const handleNewQuiz = (qId, aId) => {
    props.postAnswer(qId, aId)
    props.fetchQuiz()
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
                return <div className={`answer ${a.answer_id === selected && 'selected'}`} key={a.answer_id}>
                {a.text}
                <button onClick={() => handleSelected (a.answer_id)}>
                  {a.answer_id === selected ? 'SELECTED' : 'select'}
                </button>
              </div>
              })}
            </div>

            <button id="submitAnswerBtn" className={`button`} disabled={!(selected).toString()} onClick={() => handleNewQuiz(quiz.quiz_id, selected)} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, { setQuiz, postAnswer, fetchQuiz })(Quiz);
