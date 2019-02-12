var watch = require('node-watch')
    , fs = require('fs')
    , config = require('./config.js')
 
watch(config.path, { recursive: true }, function(evt, name) {
    if( name.toLowerCase().indexOf('.jpg') != -1 ||
        name.toLowerCase().indexOf('.jpeg') != -1 ||
        name.toLowerCase().indexOf('.png') != -1 ||
        name.toLowerCase().indexOf('.gif') != -1
    ){
        fs.appendFile('test.txt', name+"\n", function (err) {
        });
    }
});