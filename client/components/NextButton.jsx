import React from 'react'

export const NextButton = function (props) {
  return (
    <div className='nextButton'>
      {props.questionNum === 4 && <button onClick={props.buttonClick}>Results</button>}
      {props.questionNum !== 4 && <button onClick={props.buttonClick}>Next Quote</button>}
    </div>
  )
}
