import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import request from 'superagent'

import { App } from '../client/components/App.jsx'
import getQuote from '../client/api/getQuote.js'

test('Checks if title is in place', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), 'Say it, did he?')
  t.end()
})

test('getQuote returns an object', function (t) {
  getQuote((err, result) => {
    t.is(typeof result, 'object')
    t.end()
  })
})

test('getQuote returns a string for quote key in an object', function (t) {
  getQuote((err, result) => {
    t.is(typeof result.quote, 'string')
    t.end()
  })
})

test('getQuote returns a string for author key in an object', function (t) {
  getQuote((err, result) => {
    t.is(typeof result.author, 'string')
    t.end()
  })
})
test('getQuote returns a string for category key in an object', function (t) {
  getQuote((err, result) => {
    t.is(typeof result.category, 'string')
    t.end()
  })
})
