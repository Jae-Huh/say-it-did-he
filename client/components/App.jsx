import React from 'react'

import {Quote} from './Quote'
import {NextButton} from './NextButton'
import {Options} from './Options'
import getQuote from '../api/getQuote'
import {getYoda} from '../api/yodaAPI'
import {Loading} from './Loading'
import {Score} from './Score'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: ['this is a quote'],
      authors: ['author1', 'author2', 'author3'],
      loading: false,
      originalQuote: 'original',
      numQuestion: 0,
      correctCount: 0
    }
  }

  componentDidMount () {
    this.nextQuote.bind(this)()
  }

  nextQuote () {
    this.setState({
      loading: true
    })
    getQuote((err, results) => {
      if (err) {
        return console.error(err)
      }
      console.log(results)
      getYoda(results[0].quote, (err, yodafiedQuote) => {
        if (err) {
          return console.error(err)
        }
        this.setState({
          quote: yodafiedQuote,
          author: results[0].author,
          authors: results.map(quote => quote.author),
          loading: false,
          originalQuote: results[0].quote,
          answered: false
        })
      })
    })
  }

  chooseAuthor (result) {
    this.setState({
      answered: true,
      numQuestion: this.state.numQuestion += 1,
      correctCount: this.state.correctCount += result
    })
  }

  render () {
    return (
      <div className='main'>
        <h1>Say it, did he?</h1>
        {this.state.loading && <Loading />}
        {!this.state.loading && <Quote quote={this.state.quote} />}
        {!this.state.loading && <Options authors={this.state.authors} buttonClick={this.chooseAuthor.bind(this)} answered={this.state.answered} />}
        {this.state.answered && <NextButton buttonClick={this.nextQuote.bind(this)} />}
        <Score correctCount={this.state.correctCount} numQuestion={this.state.numQuestion}/>
      </div>
    )
  }
}
