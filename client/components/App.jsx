import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import {Main} from './Main'
import {Home} from './Home'

export const App = function (props) {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/game' component={Main} />
      </div>
    </Router>
  )
}
