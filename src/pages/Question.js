import React, { useState } from 'react'
import { CurrentQuestion } from '../components/CurrentQuestion'
import { NextButton } from '../components/NextButton'
import { SubmitAnswer } from '../components/SubmitAnswer'
import { Progress } from '../components/Progress'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../Styling/question.css'
import Countdown from 'react-countdown';


export const Question = () => {
    const [answered, setAnswered] = useState(false)
    const [userAnswer, setUserAnswer] = useState(null)
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
    const questions = useSelector((state) => state.quiz.questions)

    return (
        <section className="question-container">

            <CurrentQuestion userAnswer={userAnswer} setUserAnswer={setUserAnswer} answered={answered} />
            {!answered &&
                <SubmitAnswer userAnswer={userAnswer} setUserAnswer={setUserAnswer}
                    setAnswered={setAnswered} />}
            {answered && question.id !== questions.length &&
                <NextButton setAnswered={setAnswered} />}
            {answered && question.id === questions.length &&
                <Link className="button" setAnswered={setAnswered} to='/summary' >Result</Link>}
            <Progress />
        </section>
    )
}