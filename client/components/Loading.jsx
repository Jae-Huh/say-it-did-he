import React from 'react'

export const Loading = function (props) {
  function getYoda () {
    const yodas = ['yoda1.png', 'yoda2.jpg', 'yoda3.png', 'yoda4.jpg']
    const randomYoda = Math.floor(Math.random() * yodas.length)
    return '/images/' + yodas[randomYoda]
  }

  return (
    <div className='nextButton'>
      <p>Loading...</p>
      <img src={getYoda()} />
    </div>
  )
}
