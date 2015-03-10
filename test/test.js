var fs = require('fs');
var lump = require('../index.js');
var outputStream = require('./outputStream.js');

fs.createReadStream('./cons.txt').pipe(lump(Math.pow(2,17))).pipe(outputStream("FIRST STREAM"));

fs.createReadStream('./cons.txt').pipe(lump(0)).pipe(outputStream("SECOND STREAM"));
