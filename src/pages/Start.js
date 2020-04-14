import React from "react"
import { Link } from "react-router-dom"



export const StartPage = () => {
    return (
        <div>
            <h1>Welcome to the quiz!</h1>
            <Link to="/quiz">Click</Link>
        </div>

    )
}