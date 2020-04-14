import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { quiz } from '../reducers/quiz'

export const SubmitAnswer = ({ setAnswered, userAnswer, setUserAnswer }) => {
  const questionNumber = useSelector((state) => state.quiz.currentQuesionIndex)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(quiz.actions.submitAnswer({ questionId: questionNumber, answerIndex: userAnswer }))
    setAnswered(true)
  }
  return (
    <button onClick={handleSubmit}>Submit</button>
  )
}