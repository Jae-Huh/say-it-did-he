import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'

import {Quote} from './Quote'
import {NextButton} from './NextButton'
import {Options} from './Options'
import getQuote from '../api/getQuote'
import {getYoda} from '../api/yodaAPI'
import {Loading} from './Loading'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: 'this is a quote',
      authors: ['author1', 'author2', 'author3'],
      loading: false,
      originalQuote: 'original'
    }
  }

  componentDidMount () {
    this.setState({
      loading: true
    })
    getQuote((err, result) => {
      if (err) {
        return console.Error(err)
      }
      getYoda(result.quote, (err, yodafiedQuote) => {
        if (err) {
          return console.Error(err)
        }
        this.setState({
          quote: yodafiedQuote,
          author: result.author,
          loading: false,
          originalQuote: result.quote
        })
      })
    })
  }

  nextQuote () {
    this.setState({
      quote: 'this is another quote'
    })
  }

  render () {
    return (
      <div className='main'>
        <h1>Say it, did he?</h1>
        {this.state.loading && <Loading />}
        {!this.state.loading && <Quote quote={this.state.quote} />}
        <NextButton buttonClick={this.nextQuote.bind(this)} />
        <Options authors={this.state.authors} />
      </div>
    )
  }
}
