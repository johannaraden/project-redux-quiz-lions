import React  from 'react'
import { useDispatch } from "react-redux"
import { quiz } from '../reducers/quiz'



export const NextButton = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch (
        quiz.actions.goToNextQuestion()
        )
    }

    return ( 
    <button onClick={handleClick}>Next!</button>
    )
}