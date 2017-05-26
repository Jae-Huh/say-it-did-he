import request from 'superagent'

function getQuote (cb) {
  request
    .get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=4')
    .set('X-Mashape-Key', 'K8u61sMD5hmshshiooWjegxPcOyJp1whI02jsn0zHX6CW6XmYW')

    .end((err, res) => {
      if (err) {
        cb(err.message)
        return
      }
      const quote = res.body
      cb(null, quote)
    })
}

export default getQuote
