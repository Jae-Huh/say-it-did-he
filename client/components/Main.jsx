import React from 'react'

import {Quote} from './Quote'
import {NextButton} from './NextButton'
import {Options} from './Options'
import getQuote from '../api/getQuote'
import {getYoda} from '../api/yodaAPI'
import {Loading} from './Loading'
import {Score} from './Score'
import {Final} from './Final'

export class Main extends React.Component {
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
      firstQuestionLoaded: false,
      finished: false
    }
  }

  componentDidMount () {
    this.getQuotes.bind(this)()
  }

  nextQuote () {
    if (this.state.numQuestion < 4) {
      this.setState({
        numQuestion: this.state.numQuestion += 1,
        waiting: false,
        answered: false
      }, this.getQuotes)
    } else {
      this.setState({
        finished: true
      })
    }
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
        {this.state.firstQuestionLoaded && !this.state.finished && <Quote quote={this.state.quotes[this.state.numQuestion]} />}
        {this.state.firstQuestionLoaded && !this.state.finished && <Options authors={this.state.authors[this.state.numQuestion]} buttonClick={this.chooseAuthor.bind(this)} answered={this.state.answered} />}
        {this.state.answered && !this.state.loading && !this.state.finished && <NextButton buttonClick={this.nextQuote.bind(this)} />}
        {!this.state.finished && <Score correctCount={this.state.correctCount} numQuestion={this.state.answers.length} />}
        {this.state.loading && !this.state.finished && <Loading />}
        {this.state.finished && <Final correctCount={this.state.correctCount} numQuestion={this.state.answers.length} />}
      </div>
    )
  }
}
