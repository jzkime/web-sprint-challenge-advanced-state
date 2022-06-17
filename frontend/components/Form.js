import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import formSchema from '../schema/formSchema'

export function Form(props) {
  const [ disabled, setDisabled ] = useState(true)
  const onChange = evt => {
    props.inputChange(evt.target.id, evt.target.value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    // if(props.form.newQuestion && props.form.newTrueAnswer && props.form.newFalseAnswer) props.postQuiz(props.form)
    const form = { 
      "question_text": props.form.newQuestion,
      "true_answer_text": props.form.newTrueAnswer,
      "false_answer_text": props.form.newFalseAnswer
    }
    props.postQuiz(form)
    props.setMessage(`Congrats: "${props.form.newQuestion}" is a great question!`);
    props.resetForm()
  }

  useEffect(() => {
    if(props.form.newQuestion.trim().length > 0 
    && props.form.newTrueAnswer.trim().length > 0 
    && props.form.newFalseAnswer.trim().length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true)
    }
  }, [props.form])

  console.log(props.form)
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.form.newFalseAnswer}/>
      <button id="submitNewQuizBtn" className='button' disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
