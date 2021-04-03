import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import '../Styling/buttons.css'
import '../Styling/summary.css'

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const rightAnswers = answers.filter(item => item.isCorrect)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(
      quiz.actions.restart()
    )
    history.push('/')
  }


  return (
    <div className='summary-page'>
      <h1>You answered {rightAnswers.length} right out of {answers.length} questions!</h1>
      <button className='button' onClick={handleRestart} >Again!!!</button>
    </div>
  )
}