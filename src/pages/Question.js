import React, { useState } from 'react'
import { CurrentQuestion } from '../components/CurrentQuestion'
import { NextButton } from '../components/NextButton'
import { SubmitAnswer } from '../components/SubmitAnswer'

export const Question = () => {
    const [answered, setAnswered] = useState(false)
    const [userAnswer, setUserAnswer] = useState(null)

    return (
        <>
            <CurrentQuestion userAnswer={userAnswer} setUserAnswer={setUserAnswer} />
            {answered &&
                <NextButton />}
            {!answered &&
                <SubmitAnswer userAnswer={userAnswer} setUserAnswer={setUserAnswer}
                    setAnswered={setAnswered} />}
        </>
    )
}