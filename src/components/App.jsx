import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Scores from '../pages/Scores'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/scores' component={Scores} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App