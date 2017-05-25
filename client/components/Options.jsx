import React from 'react'

export const Options = function (props) {

  function authorOptions (arr) {
    return arr.map((author, key) => {
      return (<button key={key}>{author}</button>)
    })
  }

  return (
    <div className='nextButton'>
      {authorOptions(props.authors)}
    </div>
  )
}
