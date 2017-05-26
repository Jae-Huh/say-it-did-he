import React from 'react'
import {Link} from 'react-router-dom'

export const Final = function (props) {
  return (
    <div>
      <p>{props.correctCount} / {props.numQuestion}</p>
      <Link to={'/'}>Start Again</Link>
    </div>
  )
}
