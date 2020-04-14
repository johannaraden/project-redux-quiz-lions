import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentQuestion = ({ userAnswer, setUserAnswer }) => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>

      <h1>Question: {question.questionText}</h1>
      {question.options.map((answer, answerIndex) => {
        return (
          <>
            <input
              type="radio"
              id={answer}
              name="answer"
              onChange={(event) => setUserAnswer(event.target.value)}
              value={answerIndex}
            />
            <label for={answer}>{answer}</label>
          </>


        )
      })}
    </div>
  )
}
