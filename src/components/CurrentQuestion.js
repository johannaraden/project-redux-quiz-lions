import React from 'react'
import { useSelector } from 'react-redux'
import '../Styling/currentquestion.css'

export const CurrentQuestion = ({ userAnswer, setUserAnswer, answered }) => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  ///const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1 className='question'>{question.questionText}</h1>
      <div className='question-box'>
        {question.options.map((answer, answerIndex) => {
          return (
            <section className='answers'>
              <input
                type='radio'
                id={answer}
                name='answer'
                onChange={(event) => setUserAnswer(parseInt(event.target.value))}
                value={answerIndex}
              />
              {/* <label style={{ color: answered && answerIndex === question.correctAnswerIndex ? "green" : answered && answerIndex !== question.correctAnswerIndex && answerIndex == userAnswer ? "red" : "black" }} for={answer}>{answer}</label> */}
              {/* <label className={answered && answerIndex === question.correctAnswerIndex ? "green" : answered && answerIndex !== question.correctAnswerIndex && answerIndex === userAnswer ? "red" : "black" } for={answer}>{answer}</label> */}
              <label for={answer} style={{backgroundColor: answered && answerIndex === question.correctAnswerIndex ? '#4eba60' : answered && answerIndex !== question.correctAnswerIndex && answerIndex == userAnswer ? '#ba534e' : '#f0fbff'}}>
                {answer}
              </label>
            </section>
          )
        })}
      </div>  
    </div>
  )
}