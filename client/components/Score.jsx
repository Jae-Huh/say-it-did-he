import React from 'react'

export const Score = function (props) {



  return (
    <div>
      <p>{props.correctCount}/{props.numQuestion}</p>
    </div>
  )
}
