
'use strict'
const vision = require('node-cloud-vision-api')
 
 var singlereq = function(url) {
     
// init with auth
vision.init({auth: 'AIzaSyCiU8vZ_QQQXb660jtFlfIxmnA5D87YySg'})
 
// construct parameters
const req = new vision.Request({
  image: new vision.Image({
      url: url
  }),
  features: [
    new vision.Feature('TEXT_DETECTION', 4),
    new vision.Feature('LABEL_DETECTION', 3),
  ]
})
 
// send single request
vision.annotate(req).then((res) => {
  // handling response
//console.log(res.responses[labelAnnotations])

        console.log(JSON.stringify(res.responses));
   console.log(JSON.stringify(res.responses['textAnnotations']));
   
}, (e) => {
  console.log('Error: ', e)
})
 };

module.exports = singlereq;
