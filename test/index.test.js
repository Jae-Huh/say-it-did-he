import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import request from 'superagent'



























/* ############## Paul's testing starts here ################# */
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

test('getQuote returns four objects in an array in an object', function (t) {
  getQuote((err, result) => {
    t.is(result.length, 4)
    t.end()
  })
})

test('getQuote returns a string for quote key in an object', function (t) {
  getQuote((err, result) => {
    t.is(typeof result[0].quote, 'string')
    t.end()
  })
})

test('getQuote returns a string for author key in an object', function (t) {
  getQuote((err, result) => {
    t.is(typeof result[0].author, 'string')
    t.end()
  })
})

test('getQuote returns a string for category key in an object', function (t) {
  getQuote((err, result) => {
    t.is(typeof result[0].category, 'string')
    t.end()
  })
})

/* ############## Paul's testing ends here ################# */
