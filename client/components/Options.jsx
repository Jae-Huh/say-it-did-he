import React from 'react'

export class Options extends React.Component {
  constructor (props) {
    super(props)
    console.log('loading')
    this.state = {
      authors: props.authors,
      randomArr: this.authorOptions(props.authors),
      buttons: ['', '', '', '']
    }
    this.chooseOption = this.chooseOption.bind(this)
  }

  authorOptions (arr) {
    const randomArr = []
    const authorArr = arr.map(x => x)

    while (authorArr.length > 0) {
      let randomNum = Math.floor(Math.random() * authorArr.length)
      randomArr.push(authorArr.splice(randomNum, 1)[0])
    }
    return randomArr
  }

  chooseOption (key) {
    if (!this.props.answered) {
      let buttonArr = this.state.randomArr.map(author => {
        if (author === this.state.authors[0]) {
          return 'answer'
        }
        return ''
      })

      if (this.state.randomArr[key] === this.state.authors[0]) {
        buttonArr[key] = 'correct'
      } else {
        buttonArr[key] = 'incorrect'
      }
      this.setState({
        buttons: buttonArr
      })
      this.props.buttonClick()
    }
  }

  render () {
    return (
      <div className='options'>
        {this.state.randomArr.map((author, key) => {
          return (<button key={key} className={'author-button ' + this.state.buttons[key]} onClick={() => this.chooseOption(key)}>{author}</button>)
        })}
      </div>
    )
  }
}
