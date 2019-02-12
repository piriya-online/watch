var watch = require('node-watch')
    , config = require('./config.js')
 
watch('./xx', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
});