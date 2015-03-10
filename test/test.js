var fs = require('fs');
var lump = require('../index.js');
var outputStream = require('./outputStream.js');

fs.createReadStream('./cons.txt').pipe(lump(1024)).pipe(outputStream());
