import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/buttons.css'
import '../Styling/start.css'


export const StartPage = () => {
    return (
      <div className='frame'>
        <div className='start-container'>
          <h1 className='start-headline'>Welcome to the quiz!</h1>
          <Link className='button' to='/quiz'>Click to start</Link>
        </div>
      </div>
    )
}