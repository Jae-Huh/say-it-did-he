import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'

import {Quote} from './Quote'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='main'>
        <h1>This is a header</h1>
        <Quote quote={'the quote goes here'} />
      </div>
    )
  }
}
