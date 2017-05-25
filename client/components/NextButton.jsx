import React from 'react'

export const NextButton = function (props) {
  return (
    <div className='nextButton'>
      <button onClick={props.buttonClick}>Next Quote</button>
    </div>
  )
}
