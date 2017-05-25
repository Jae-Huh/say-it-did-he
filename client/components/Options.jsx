import React from 'react'

export const Options = function (props) {
  return (
    <div className='nextButton'>
      {authorOptions(props.authors)}
    </div>
  )
}

function authorOptions (arr) {
  const randomArr = []
  while (arr.length > 0) {
    randomArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0])
  }

  return randomArr.map((author, key) => {
    return (<button key={key}>{author}</button>)
  })
}
