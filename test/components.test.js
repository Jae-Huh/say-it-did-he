import test from 'tape'
import React from 'react'
import request from 'supertest'

import { shallow } from 'enzyme'

import App from '../client/components/App'


/* ############## Paul's testing starts here ################# */
test('Checks if title is in place', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), 'Say it, did he?')
  t.end()
})

// ############ Robs Tests Start here ############################


// ######### Robs tests end here #########################
