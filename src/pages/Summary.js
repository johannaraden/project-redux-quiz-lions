import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { useHistory } from "react-router-dom"



export const Summary = ({setAnswered}) => {
  const answers = useSelector((state) => state.quiz.answers)
  const rightAnswers = answers.filter(item => item.isCorrect)
  const history = useHistory()

  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(
      quiz.actions.restart()
    )
    //setAnswered(false)
    history.push('/')
  }


  return (
    <div>
      <h1>You answered {rightAnswers.length} right out of {answers.length} questions!</h1>
      <button onClick={handleRestart} >Again!!!</button>
    </div>
  )
}