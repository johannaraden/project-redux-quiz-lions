import React, { useState } from 'react'
import { CurrentQuestion } from '../components/CurrentQuestion'
import { NextButton } from '../components/NextButton'
import { SubmitAnswer } from '../components/SubmitAnswer'
import { Progress } from '../components/Progress'

export const Question = () => {
    const [answered, setAnswered] = useState(false)
    const [userAnswer, setUserAnswer] = useState(null)

    return (
        <>
            <CurrentQuestion userAnswer={userAnswer} setUserAnswer={setUserAnswer} answered={answered} />
            {answered &&
                <NextButton setAnswered= {setAnswered}/>}
            {!answered &&
                <SubmitAnswer userAnswer={userAnswer} setUserAnswer={setUserAnswer}
                    setAnswered={setAnswered} />}
                <Progress/>
        </>
    )
}