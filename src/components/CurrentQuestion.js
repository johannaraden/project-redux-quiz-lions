import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentQuestion = ({ userAnswer, setUserAnswer, answered }) => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  ///const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuesionIndex])

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
              onChange={(event) => setUserAnswer(parseInt(event.target.value))}
              value={answerIndex}
            />
            <label style={{color: answered && answerIndex === question.correctAnswerIndex ? "green" : answered ? "red" : "black" }} for={answer}>{answer}</label>
          </>


        )
      })}
    </div>
  )
}
