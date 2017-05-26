import test from 'tape'
import React from 'react'
import request from 'supertest'

import { shallow } from 'enzyme'
import { getYoda } from '../client/api/yodaAPI.js'

import App from '../client/components/App'

test('<App />', t => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  t.equal(wrapper.text(), expected)
  t.end()
})

// ############ Robs Tests Start here ############################
test("test getYoda function returns a string", function (t) {
  // Arrange
  // Act
  getYoda('It was the best of times.', (err,result) => {
    // Assert
    t.is(typeof result, 'string')
    t.end()
  })
})

// ######### Robs tests end here #########################
