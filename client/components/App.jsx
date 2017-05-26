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
      quotes: [],
      authors: [],
      loading: true,
      originalQuotes: [],
      answers: [],
      numQuestion: 0,
      correctCount: 0,
      waiting: false,
      firstQuestionLoaded: false
    }
  }

  componentDidMount () {
    this.getQuotes.bind(this)()
  }

  nextQuote () {
      this.setState({
        numQuestion: this.state.numQuestion += 1,
        waiting: false,
        answered: false
      }, this.getQuotes)
  }

  getQuotes () {
    this.setState({
      loading: true
    })
    getQuote((err, results) => {
      if (err) {
        console.error(err)
        return getQuotes()
      }
      console.log(results)
      getYoda(results[0].quote, (err, yodafiedQuote) => {
        if (err) {
          console.error(err)
          return getQuotes()
        }
        console.log(yodafiedQuote)
        console.log([results.map(quote => quote.author)])
        this.setState({
          authors: this.state.authors.concat([results.map(quote => quote.author)]),
          quotes: this.state.quotes.concat([yodafiedQuote]),
          loading: false,
          originalQuotes: this.state.quotes.concat([results[0].quote]),
          firstQuestionLoaded: true
        }, () => {
          if (this.state.numQuestion === this.state.quotes.length - 1) {
            this.getQuotes()
          }
        })
      })
    })
  }

  chooseAuthor (answer) {
    console.log(answer)
    let result = 0
    if (answer === this.state.authors[this.state.numQuestion][0]) {
      result += 1
    }
    this.setState({
      answered: true,
      correctCount: this.state.correctCount += result,
      answers: this.state.answers.concat([answer])
    })
  }

  render () {
    return (
      <div className='main'>
        <h1>Say it, did he?</h1>
        {this.state.firstQuestionLoaded && <Quote quote={this.state.quotes[this.state.numQuestion]} />}
        {this.state.firstQuestionLoaded && <Options authors={this.state.authors[this.state.numQuestion]} buttonClick={this.chooseAuthor.bind(this)} answered={this.state.answered} />}
        {this.state.answered && !this.state.loading && <NextButton buttonClick={this.nextQuote.bind(this)} />}
        <Score correctCount={this.state.correctCount} numQuestion={this.state.answers.length} />
        {this.state.loading && <Loading />}
      </div>
    )
  }
}
