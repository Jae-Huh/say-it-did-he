import React from 'react'
import {Link} from 'react-router-dom'

export const Home = function (props) {
  return (
    <div>
      <div className='immovable'>
        <section className='star-wars'>
          <div className='crawl'>
            <div className='title'>
              <p>Episode II.V</p>
              <h1>Say it, did he?</h1>
            </div>
            <p>The galaxy is in turmoil once again.</p>
            <p>A fiendish team of junior developers at EDA have taken quotes from famous movies and yodified them! Can you restore order to the galaxy by correctly identifying what movies these quotes come from?</p>
            <p>Click on the start button below to begin!</p>
          </div>
        </section>
      </div>
    <Link to='/game'>Start</Link>
  </div>
  )
}
