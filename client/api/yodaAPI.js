import request from 'superagent'

export function getYoda (textInput, cb) {
  textInput = textInput.replace(/ /gi, '+')  // replacing spaces in string with '+'

  request
     .get('https://yoda.p.mashape.com/yoda?sentence=' + textInput)
     .set('X-Mashape-Key', 'ZMJzgwcAscmshawAmUX4cX74S9eRp1cNhTwjsne44SVA72j5LC')
     .set('Accept','text/plain')
   .end((err,res)=>{
     if (err) {
       cb(err.message)
       return
     }
     const yodifiedText = res.text
     cb(null, yodifiedText)
   })
}
