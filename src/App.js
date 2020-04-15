import React from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { StartPage } from './pages/Start'
import { Question } from './pages/Question'
import { Summary } from './pages/Summary'
import Countdown from 'react-countdown';


const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  const history = useHistory()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/quiz" exact>
            <Countdown
              date={Date.now() + 60000}
              intervalDelay={0}
              precision={3}
              onComplete={() => history.push('/summary')} />
            <Question />
          </Route>
          <Route path="/summary" exact>
            <Summary />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  )
}
