var fs = require('fs');
var lump = require('../index.js');
var stringStream = require('./stringStream.js');
var outputStream = require('./outputStream.js');

//fs.createReadStream('./cons.txt').pipe(lump(Math.pow(2,17))).pipe(outputStream("FIRST STREAM"));

//fs.createReadStream('./cons.txt').pipe(lump(0)).pipe(outputStream("SECOND STREAM"));

//var stringLumps = fs.createReadStream('./cons.txt');
//stringLumps.setEncoding('utf8');
var lumper =lump(Math.pow(2,18));
lumper.pipe(outputStream("THIRD STREAM"));
lumper.write({b:123});
lumper.end({a:2});


//stringLumps.on('data', function(chunk){
//console.log(chunk)
//})
